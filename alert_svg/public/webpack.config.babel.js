import path from 'path'
import express from 'express'
import webpack from 'webpack'

export default {
    entry: {
        index: './src/index.js'
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './bundle/')
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: [ 'url-loader' ]
            }
        ]
    },

    externals: {
        react: 'window.React',
        'react-dom': 'window.ReactDOM',
        'alert-modal': 'window.Alert'
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],

    devServer: {
        contentBase: './',
        publicPath: '/bundle',
        port: 8080,
        before(app) {
            app.use('/bundle', express.static(path.resolve(__dirname, '../lib/')))
        }
    }
}