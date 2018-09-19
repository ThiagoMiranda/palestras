import axios from 'axios'
import SVGO from 'svgo'

import { createFolder } from '../file'
import { log } from '../shared/utils'

import config from '../../config.json'

const svgoWithFill = new SVGO({ plugins: config.svgo.options })
const svgoWithoutFill = new SVGO({...config.svgo.options, plugins: config.svgo.options.concat(
  {
    removeAttrs: {
      attrs: '(stroke|fill|style|clip-path)'
    },
  },{
    removeElementsByAttr: {
      id: 'clip0'
    }
  }
)})

class InterFigma {
    categories = []
    svgIds = []
    svgsInfo = []
    svgBodyMap = {}

    constructor() {
        createFolder('lib')
    }

    requestFigma = url => {
        return axios.get(`${config.FIGMA_BASE_URL}${url}`, { headers: { 'X-FIGMA-TOKEN': config.FIGMA_TOKEN } })
    }

    requestS3 = url => {
        return axios.get(url)
    }

    getCategories = async () => {
        log(`Primeiro request: /files/${config.FIGMA_FILE_ID}`, 'grey')
        const response = await this.requestFigma(`/files/${config.FIGMA_FILE_ID}`)
        const { document: { children: folder } } = response.data

        const vectorList = folder.reduce((acc, { name: folderName, children: svgs }) => {
            svgs.forEach( ({name, id, absoluteBoundingBox, blendMode}) => {
                const svgInfo = {
                    name,
                    folder: folderName,
                    id,
                    width: absoluteBoundingBox.width,
                    height: absoluteBoundingBox.height,
                    blendMode
                }
                acc.push(svgInfo)
                if (this.categories.indexOf(folderName) < 0) this.categories.push(folderName)
            })
            return acc
        }, [])
        const svgIds = vectorList.map(item => item.id)
        
        this.createCategoriesFolders()
        await this.getSvgsURLs(svgIds, vectorList)
        await this.getSvgsBodies()
        return this.svgBodyMap

    }

    createCategoriesFolders = () => {
        this.categories.forEach(item => createFolder(`lib/${item}`))
        
    }

    getSvgsURLs = async (svgIds, vectorList) => {
        log(`Segundo request: /images/${config.FIGMA_FILE_ID}?ids=${svgIds.join(',')}&format=svg`, 'grey')
        const response = await this.requestFigma(`/images/${config.FIGMA_FILE_ID}?ids=${svgIds.join(',')}&format=svg`)
        const { images } = response.data
        this.svgsInfo = vectorList.map(item => ({...item, url: images[item.id]}))
    }

    getSvgsBodies = async () => {
        log(`Request em cada objeto no S3`,  `grey`)
        const symbolsPromiseMap = this.svgsInfo.map(async ({ url, name, folder, width, height, blendMode }) => {
            const response = await axios.get(url)
            const svgBody = blendMode !== 'LUMINOSITY' ? await svgoWithFill.optimize(response.data) : await svgoWithoutFill.optimize(response.data)
            const dest = `${folder}/${name.toLowerCase()}`
            this.svgBodyMap[`${dest}`] = { body: svgBody.data, width, height }
            return response
        })
        await Promise.all(symbolsPromiseMap)
    }

}

export default InterFigma
