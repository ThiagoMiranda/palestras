import { log } from '../shared/utils'
import checkAndCreateFile from '../file'

let svgSymbols

const createSvgsFiles = svgBodyMap => {
  let svgMap = ['<svg xmlns="http://www.w3.org/2000/svg">']
  Object.keys(svgBodyMap).forEach(item => {
    const { body, width, height } = svgBodyMap[item]
    createSvgUnique(item, body)
    svgMap.push(`<symbol id="${item.split('/')[1].toLowerCase()}" viewBox="0 0 ${width} ${height}">${body.match(/<svg.*?>(.*?)<\/svg>/, '')[1]}</symbol>`)
  })
  createSvgMap(svgMap.concat('</svg>'))
}

const createSvgUnique = async (dest, body) => {
    checkAndCreateFile(`lib/${dest}.svg`, body)
}

const createSvgMap = async svgMap => {
    svgSymbols = checkAndCreateFile('/lib/inter.svg', null, false)
    svgSymbols.write(svgMap.join(''))
    svgSymbols.end()
}

export default createSvgsFiles