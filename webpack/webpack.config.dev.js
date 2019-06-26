const path = require('path');
const glob = require('glob');
const config = require('../config');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const resolvePath = p => path.resolve(__dirname, p);


const isONEntry = true;

const getEntryName = (path) => {
    return path.match(/\/src\/(.*)\.js/)[1];
}

const getMoreEntrys = () => {
    const files = glob.sync(resolvePath('../src/page/*/*.js'));
    const map = {};
    files.forEach((item) => {
        map[getEntryName(item)] = item;
    });

    return map;
}


const getOneEntrys = () => {
    //const files = glob.sync(resolvePath('/src/page/*/*.js'));
    // return {
    //     main: ['react-hot-loader/patch', 'webpack-dev-server/client?http://localhost:8809',
    //         'webpack/hot/only-dev-server', resolvePath('../src/app/index.js')]
    // };
    return {
        main: [resolvePath('../src/app/index.js')]
    };
}

const getEntrys = () => {
    if (isONEntry) return getOneEntrys();
    return getMoreEntrys();
}

const getOutput = () => {
    if (isONEntry) {
        return {
            //filename: '[name].[hash:8].js',
            filename: '[name].js',
            path: resolvePath('../dist'),
            publicPath:config.jsCdnHost
        }
    }
    return {
        filename: '[name].[chunkhash:8].js',
        path: resolvePath('../dist'),
        publicPath: config.jsCdnHost
    }
}

module.exports = {
    //mode: 'development',
    devtool:'cheap-module-eval-source-map',
    entry: getEntrys(),
    output: getOutput(),
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            use: [{
                loader: "babel-loader"
            }]
        }, {
            test:/\.(sa|sc|c)ss$/,
            use:[
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        // // 这里可以指定一个 publicPath
                        // // 默认使用 webpackOptions.output中的publicPath
                        //publicPath: config.cssCdnHost,
                        hmr: true
                    },
                },
                {
                    loader: "css-loader",
                },
                {
                    loader: "sass-loader"
                }
            ]
        }]
    },
    devServer:{
        port:8809,
        host:'127.0.0.1',
        contentBase: resolvePath('../dist'),
        overlay:{error:true},
        publicPath: '/',
        //open:true,
        hot:true,
        compress: true,
        watchOptions: {
            ignored: /node_modules/,
            //当第一个文件更改，会在重新构建前增加延迟。
            //这个选项允许 webpack 将这段时间内进行的任何其他更改都聚合到一次重新构建里。以毫秒为单位：
            aggregateTimeout: 500,
            //指定毫秒为单位进行轮询
            poll: 500
        },
        historyApiFallback: {
            disableDotRule: true
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            // 类似 webpackOptions.output里面的配置 可以忽略
            //filename: '[name].[contenthash:8].css',
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        new HtmlWebPackPlugin({
            title:'this is the title',
            filename:'index.html',
            template:'./server/temp/index.html',
            inject:'body',
            favicon:'',
            minify:{

            },
        }),
        // 删除文件 保留新文件
        new CleanWebpackPlugin(),
        //new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ],
}
