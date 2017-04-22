var path = require('path');

module.exports = {
    entry: ['babel-polyfill', './app/index.js'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build/js'),
        publicPath: '/build/js/'
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader'
            }
        ]
    },
    devServer: {
        port: 3000,
        contentBase: './',
        inline: true
    }
};