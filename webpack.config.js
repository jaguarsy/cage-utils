/**
 * Created by johnnycage on 16/4/21.
 */
var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        app: [
            './src/index.js'
        ]
    },
    output: {
        path: path.join(__dirname, './dist/'),
        publicPath: './',
        filename: 'cage-utils.js'
    },
    resolve: {
        extensions: ["", ".js"]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap: false
        })
    ]
};