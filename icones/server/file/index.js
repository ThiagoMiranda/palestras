import path from 'path'
import fs from 'fs'

import { log } from '../shared/utils'

export const createFolder = dest => {
    const destPath = path.resolve(__dirname, `../../${dest}`)
    if (!fs.existsSync(destPath)) fs.mkdir(destPath, err => err && log(`Erro ao criar arquivo ${err}`, 'red'))
}

const checkAndCreateFile = (destination, svgBody, create = true) => {
    const svgFile = `../../${destination}`
    const stream = fs.createWriteStream(path.resolve(__dirname, svgFile))
    if (create) {
        stream.write(svgBody)
        stream.end()
    } else return stream
}

export const readFiles = (dirname, cb) => {
    const dest = path.resolve(__dirname, `../../../${dirname}`)
    fs.readdir(dest, async (err, filenames) => {
        if (err) {
            console.info(err)
            return;
        }
        filenames.forEach(async (filename) => {
            return fs.readFile(path.resolve(dest, filename), 'utf-8', function (err, content) {
                if (err) {
                    return;
                }
                cb({ body: content, name: filename.replace(/.svg/gi,''), folder: 'Page', width: 130, height: 100, blendMode: 'LUMINOSITY' })
            });
        });
    });
}

export default checkAndCreateFile