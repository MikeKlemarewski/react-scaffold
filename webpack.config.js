var webpack = require('webpack');

module.exports = {
    entry: './app/index.jsx',
    output: {
        path: __dirname + '/build',
        filename: 'app.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.ProvidePlugin({
            'React': 'react'
        })
    ],
    module: {
        loaders: [{
            test: /.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            },
            cacheDirectory: __dirname + '/tmp'
        }]
    },
    devServer: {
         headers: { "Access-Control-Allow-Origin": "*" },
         contentBase: '.',
         port: 8443
    }
};
