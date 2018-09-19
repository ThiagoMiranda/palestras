
import checkAndCreateFile from '../file'

const createReactSvgs = async (svgsBody) => {
    Object.keys(svgsBody).forEach(item => {
        const { body, width, height } = svgsBody[item]
        const className = `icon icon--${item.split('/')[1]} fill-\${color}`
        const parsedBody = body.replace(/-([a-z])/g, (m, w) => {
            return w.toUpperCase()
        }).replace(/viewBox="([^"]*)"/gi, `className={\`${className}\`} style={{ width: \`\${width}px\`, height: \`\${height}px\` }} viewBox={\`0 0 ${width} ${height}\`}` )
        const parsed = `import React from 'react'\n export default function ({ width, height, color }){return (${parsedBody})}`
        checkAndCreateFile(`/lib/${item}.js`, parsed)
    })
}

export default createReactSvgs