const path = require('path')
const webpack = require('webpack');
const resolvePath = (pathstr) => path.resolve(__dirname, pathstr);


module.exports = {
    mode: 'development',
    entry: resolvePath('../src/client/app/index.js'),//入口文件
    output: {
        filename: 'index.js',
        path: resolvePath('../dist/static')
    },
    module: {
        rules: [{
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            '__SERVER__': false
        })
    ]
}
