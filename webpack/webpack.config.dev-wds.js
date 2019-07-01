const path = require('path');
const glob = require('glob');
const config = require('../config');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const resolvePath = p => path.resolve(__dirname, p);

const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const Dashboard = require('webpack-dashboard');
const DashboardPlugin = require('webpack-dashboard/plugin');
const dashboard = new Dashboard();
const ProgressBarPlugin = require('progress-bar-webpack-plugin');


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
        main: ['react-hot-loader/patch',resolvePath('../src/app/index.js')]
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
            chunkFilename:'[name].js',
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
    mode: 'development',
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
                        hmr: process.env.NODE_ENV === 'development'
                    },
                },
                {
                    loader: "css-loader",
                },
                {
                    loader: "sass-loader"
                },
                {
                    loader:"postcss-loader"
                }
            ]
        }]
    },
    devServer:{
        port:8809,
        host:'localhost',
        quiet: true,
        contentBase: resolvePath('../dist'),
        overlay:{error:true},
        publicPath: '/',
        hot:true,
        open:true,
        compress: true,
        watchContentBase: true,
        watchOptions: {
            ignored: /node_modules/,
            //当第一个文件更改，会在重新构建前增加延迟。
            //这个选项允许 webpack 将这段时间内进行的任何其他更改都聚合到一次重新构建里。以毫秒为单位：
            aggregateTimeout: 500,
            //指定毫秒为单位进行轮询
            poll: 500
        },
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        historyApiFallback:true,
        // historyApiFallback: {
        //     disableDotRule: true  用不到这个情况 
        // }
    },
    plugins: [
        new MiniCssExtractPlugin({
            // 类似 webpackOptions.output里面的配置 可以忽略
            //filename: '[name].[contenthash:8].css',
            filename: '[name].css',
            chunkFilename: '[name].css',
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
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new DashboardPlugin(dashboard.setData),
        new ProgressBarPlugin({
            format: 'build [:bar] :percent (:elapsed seconds)',
            clear: false,
            width: 60
        })
    ],
    optimization:{
        minimizer:[
            new UglifyJsPlugin(),
            new OptimizeCSSAssetsPlugin()
        ],
        splitChunks:{
            cacheGroups: {
            
                styles: {
                    name: 'styles',
                    test: /\.scss$/,
                    chunks: 'all',
                    enforce: true,
                },
                // elementUI: {
                //     name: "chunk-elementUI", // 单独将 elementUI 拆包
                //     priority: 20, // 权重要大于 libs 和 app 不然会被打包进 libs 或者 app
                //     test: /[\/]node_modules[\/]element-ui[\/]/
                // },
                libs: {// 抽离第三方插件
                    test: /node_modules/,   // 指定是node_modules下的第三方包
                    chunks: 'initial',
                    name: 'libs',  // 打包后的文件名，任意命名    
                    // 设置优先级，防止和自定义的公共代码提取时被覆盖，不进行打包
                    priority: -10
                },
                commons: { // 抽离自己写的公共代码，utils这个名字可以随意起
                    chunks: 'async',
                    name: 'commons',  // 任意命名
                    minSize: 0,    // 只要超出0字节就生成一个新包
                    minChunks:2,
                    priority: 5,
                    reuseExistingChunk: true
                }
            }
        },
        runtimeChunk: {
            name: entrypoint => `manifest.${entrypoint.name}`
        }
    }
}
