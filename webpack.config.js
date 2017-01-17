const webpack = require('webpack');
const path = require('path');
const BabiliPlugin = require("babili-webpack-plugin");
 


const config = {
    entry: path.join(__dirname, 'src/index.ts'),

    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js' 
    },

    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [
        new BabiliPlugin()
    ],
    module: {
        loaders: [
        {
            test: /\.ts$/,
            exclude: 'node_modules',
            loader: 'awesome-typescript-loader'
        }
        ]
    }
};

module.exports = config;