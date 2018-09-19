import '@babel/polyfill'

import Figma from './Figma'
import createSvgsFiles from './svg'
import createReactSvgs from './react'
import { log } from './shared/utils'

log('Iniciado processo de build...', 'green')
const figma = new Figma()
figma.getCategories().then(svgBodyMap => {
  log('Criando arquivos svgs...', 'blue')
  createSvgsFiles(svgBodyMap)
  log('Criando arquivos react...', 'blue')
  createReactSvgs(svgBodyMap)
  log('Processo completado com sucesso!!!', 'green')
})
