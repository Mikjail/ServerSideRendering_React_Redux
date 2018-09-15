const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');
const config = {
    // Inform webpack that we are building a bundle
    // for nodejs, rather than for the browser
    target: 'node',

    //tell webpack the root file of our server application
    // server application
    entry: './src/index.js',

    //Tell webpack where to put the output file
    //generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    
    externals: [webpackNodeExternals()]
}; 
module.exports = merge(baseConfig, config);