import '@babel/polyfill'

import Figma from './Figma'
import createSvgsFiles from './svg'
import createReactSvgs from './react'
import { log } from './shared/utils'

log('Iniciado processo de build...', 'green')
const figma = new Figma((svgBodyMap) => {
  log('Criando arquivos svgs...', 'blue')
  createSvgsFiles(svgBodyMap)
  log('Criando arquivos react...', 'blue')
  createReactSvgs(svgBodyMap)
  log('Processo completado com sucesso!!!', 'green')

  if (Object.keys(svgBodyMap).length > 15) {
    console.info('\n\n\n\n\n\n\n\n')
    console.info('MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNMMMMMMMMM\n'
    + 'MMMdMMMMMMMMMMMMMm....-..`````mMMMMs::::hMMMMMMMMMM:...````....hMMMMMMMNMNMNMMMM\n'
    + 'MMMMMMMMMMMMMMMMMm            dMMMM/    yMMMMMMMMMN`           dMMMMMMo:/.+-/.yM\n'
    + 'MMMMMMMMMMMMMNmMMm    `ooossyyNMMMM:    yMMMMMMMMMM`    /yyyyyyNMMMMMMdMdddhmdmM\n'
    + 'MNMMMMMMMMMMMMMMMm    .MMMMMMMMMMMM:    yMMMMMMMMMM.    oMMMMMMMdNMMMMMMMMMMmmMM\n'
    + 'MMMMMMMMMMMMMMMMMm    .MMMMMMMMMMMM:    hMMMMMMMMMM.    sMMMMMMMMMMMMMMMNNMMMMMM\n'
    + 'MMMMMMMMMMMmMMMMMm    .MMMMMMMMMMMM:    hMMMMMMMMMM.    yMMMMMMMMMMMMMMMMMMMMMMM\n'
    + 'MMNMMMMMMMMMMMMMMN    .MMMMMMMMMMMM:    hMMMMMMMMMM.    :////oMMMMMMMMMMMMMMMMMM\n'
    + 'MMMMMMMMMMMMMMMMMN`   `//////dMMMMM/    hMMMMMMMMMM.         -MMMMMMMMMMMMNNMMMM\n'
    + 'MMMMMMMMMMMMMMMMMM`          yMMMMM/    yMMMMMMMMMM`    ossssyMMMNNMMMMMMMNMMMMM\n'
    + 'MMMMMMMMMMMmdMMMMM`    ssssssmMMMMM/    sMMMMMMMMMM`   `MMMMMMMMMMymMMMMMMMMMMMM\n'
    + 'MMMMmNMMMMMMMMMMMM`    dMMMMMMMMMMM/    oMMMMMMMMMN`   `MMMMMMMMMMMMMMMMMMMMMMMM\n'
    + 'MMMMNNMMMMMMMMMMMM`    hMMMMMMMMMMM/    +MMMMMMMMMN    `MMMMMMMMMMMMMMMMMMMMMMNM\n'
    + 'MMMMMMMMMMMMMMMMMN`    yMMMMMMMMMMM:    /MMMMMMMMMN    `MMMNMMMMMMMMMMMMMMMMMMMm\n'
    + 'MMMMMMMMMMMMMmMMMN     +hhhhhhNMMMM-    :mmmmmmNMMN     ///::::dMMMMMMMMMMMMMMMM\n'
    + 'MMNMMMMMMMMMMNMMMN            \'mMMMM.           hMMN            dMMMMMMmmMMMMMMMM\n'
    + 'MMMMMMMMMMMMMMMMMN-..```````..mMMMM:`          yMMN........`` `mMMMMMMMMMMMMMMMh\n'
    + 'MMMMMNMMMNMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNNNNNNNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\n'
    + 'MMMMMMMMMNMMMMMMMMMMMMMMMMMMMMMMMMMMMd-o/d:yMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\n'
    + 'MMNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMdoMd+/dMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNMMMMMM\n'
    + 'MMdmMMMMMNyydMMMMMMMd/::+NMMMMMMMMMMMmysoosyMMMMMMMMMMMMMMMmdhhhdmMMMMMMMMMMMMMM\n'
    + 'MMMMMMMMMm  \`dmMMMMMd   .hymMMMMMMMMM-      hhMMMMMMMMMMd/\`       .sMMMMMMMMMMMM\n'
    + 'MMMMMMMMMN   -yymMMMd   \`dssymMMMMMMm       :o+hMMMMMMMh\`    \`      ymMMMNMMMmMMv\n'
    + 'MMMMMMMMMm    -ysymMd   \`dssssymMMMMo        s::/hNMMMM/   -mMNh-   :hhmMMMMMNMM\n'
    + 'MMMMMMMMMh     .yssyh   \`dssssssymMN.        -o:::/yNMM:   hMMMMh   .dyyhmMMMMMM\n'
    + 'NMMMNmMMMy      .yssy   \`dssssssssyy          s:::::/yN/   dMMMMm   \`dyyyyhmMMMM\n'
    + 'MMMMMMMMMy       .ysy    dssssssssy:    ..    -o::::::o:   yMMMMd    dyyyyyyymMM\n'
    + 'MMMMMMMMMy        .yy    dssssssssh\`    ss     s::::::o-   sMMMMy    hyyyyyyyyym\n'
    + 'MMMMMMMMMy    /    \`    hsssssssso    .Nm\`    +/:::::s.   oMMMMy    hyyyyyyyyyy\n'
    + 'MMMMMMMMMh    ho         hsssssssy-    oMMo    .s:::::s.   oMMMMs    dyyyyyyyyyy\n'
    + 'MMMMMMMMMh    yys`       hsssssssy     shhy     s:::::s.   sMMMM+   `dyyyyyyyyyy\n'
    + 'MMMMMMMMMd    yssy`      hsssssss+              +/::::o-   yMMMM:   .dyyyyyyyyyy\n'
    + 'MNMMMMMMMh    ysssy.     yssssssh`    `.....    .s::::+/   yMMMM.   :hyyyyyyyyyy\n'
    + 'MMMMMMMMMy    sssssh.    ysssssss    .hoooos-    y::::/+   .yNMd`   +hyyyyyyyyyy\n'
    + 'MMmNMMMMMs    ssssssh`   ssssssh-    ++::::/+    s::::/s            yyyyyyyyyyyy\n'
    + 'MMMMMMMMMh/:::yssssssyooohyssssh/////y/:::::y++++y+::::oo.        `odyyyyyyyyyyy\n'
    + 'MMMMMMMMMMNdhhhdhssssshdhhhdyssshy+//+ss/::::os+//ss+:::/ydoo++++sy+/oyysssyssyy\n'
    + 'MMMMMMMMMNMMNmhhhdhssssshdhhddyssshy+//+ys/::::oyo//sy+:://oy++++++++/+oyysssyyy')
  }
})
figma.getCategories()
