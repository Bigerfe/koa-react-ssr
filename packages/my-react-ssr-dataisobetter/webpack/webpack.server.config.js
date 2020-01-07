// webpack/webpack.dev.config.js
//webpack 配置文件
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const webpack = require('webpack');
const resolvePath = (pathstr) => path.resolve(__dirname, pathstr);
//构建前清理目录
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
process.env.BABEL_ENV = 'node';//设置 babel 的运行环境

const isProd=process.env.NODE_ENV==='production';

module.exports = {
    mode: process.env.NODE_ENV,
    target: 'node',
    entry: resolvePath('../src/server/app/index.js'),//入口文件
    output: {
        filename: 'app.js',
        path: resolvePath('../dist/server')
    },
    externals: [nodeExternals()],
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        },
        {
                test: /.(png|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        emitFile: false,
                        name: isProd ? 'img/[name].[hash:8].[ext]' : 'img/[name].[ext]',
                        publicPath: isProd ? '/' : 'http://localhost:9002'
                    }
                }
            }
        ]
    },
    plugins:[
        new webpack.DefinePlugin({
        'process.env': { NODE_ENV: `"${process.env.NODE_ENV}"`},
        '__IS_PROD__':isProd,
        '__SERVER__': true
        })
    ],
    resolve: {
        alias: {
            //定义dist 目录别名，方便导入模块
            '@dist': path.resolve(__dirname,'../dist')
        }
    }
}


