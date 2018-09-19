import path from 'path'
import fs from 'fs'

import { log } from '../shared/utils'

export const createFolder = dest => {
    const destPath = path.resolve(__dirname, `../../${dest}`)
    if(!fs.existsSync(destPath) ) fs.mkdir(destPath, err => err && log(`Erro ao criar arquivo ${err}`, 'red'))
}

const checkAndCreateFile = (destination, svgBody, create = true) => {
    const svgFile = `../../${destination}`
    const stream = fs.createWriteStream(path.resolve(__dirname, svgFile))
    if (create) {
        stream.write(svgBody)
        stream.end()
    } else return stream
}

export default checkAndCreateFile