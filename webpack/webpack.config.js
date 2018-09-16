
const path = require('path');
const webpack = require('webpack');
const pkg = require('./package.json')

module.exports = {
    entry: {
        'index.webpack': path.resolve('./src/index.js')
    },
    output: {
        libraryTarget: 'umd',
        filename: pkg.main,
        path: path.resolve('./lib')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
};