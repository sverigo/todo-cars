var webpack = require('webpack');

module.exports = {
    entry: {
        app: './app.module.js',
        vendor: ['angular']
    },
    output: {
        filename: './app.bundle.js'
    },
    plugins: [
        new webpack.optimize.CommonChunkPlugin("vendor", 'vendor.bundle.js')
    ]
};