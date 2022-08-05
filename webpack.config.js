var path = require('path')

module.exports = {
    mode: "development",
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            { test: /\.js|jsx$/, use: 'babel-loader', exclude: "/node_modules" },
        ],
    },
}