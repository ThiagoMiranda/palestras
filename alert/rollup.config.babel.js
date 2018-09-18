import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import postcss from 'rollup-plugin-postcss'
import uglify from 'rollup-plugin-uglify-es'
import copy from 'rollup-plugin-copy-assets'

import pkg from './package.json'

const globals = {
    react: 'React',
    'react-dom': 'ReactDOM'
}

export default {
    input: './src/index.js',
    moduleName: 'Alert',
    output: [
        {
            name: 'Alert',
            file: pkg.main,
            format: 'umd',
            globals
        },
        {
            name: 'Alert',
            file: pkg.module,
            format: 'es',
            globals
        }
    ],
    experimentalCodeSplitting: true,
    experimentalDynamicImport: true,
    sourcemap: true,
    plugins: [
        postcss({
            extract: true,
            minimize: true,
            sourceMap: true
        }),
        babel({
            exclude: 'node_modules/**'
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        resolve(),
        commonjs(),
        uglify(),
        copy({
            assets: [
                './src/assets/images/',
                './src/assets/sass/'
            ]
        })
    ],
    external: ['react', 'react-dom'],
    onwarn: function (message) {
        // Suppress this error message... there are hundreds of them. Angular team says to ignore it.
        // https://github.com/rollup/rollup/wiki/Troubleshooting#this-is-undefined
        if (/The 'this' keyword is equivalent to 'undefined' at the top level of an ES module, and has been rewritten./.test(message)) {
            return;
        }
    }
}