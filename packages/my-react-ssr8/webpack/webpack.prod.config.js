// webpack/webpack.dev.config.js
//webpack 配置文件
const path = require('path')
const webpack = require('webpack');
//提取 css  插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//生成 manifest 方便定位对应的资源文件
const ManifestPlugin = require('webpack-manifest-plugin');

//压缩 js 代码
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

//构建前清理目录
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');

//压缩和优化 css
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

//路径转换
const resolvePath = (pathstr) => path.resolve(__dirname, pathstr);


module.exports = {
    mode: 'production',
    devtool: 'none',
    entry: {
        main: [resolvePath('../src/client/app/index.js')] //指定一个入口名称
    },
    output: {
        filename: 'js/[name].[chunkhash:8].js',
        path: resolvePath('../dist/static'),
        publicPath: '/'
    },
    module: {
        rules: [{
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: false
                        }
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "sass-loader"
                    },
                    {
                        loader: "postcss-loader"
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: 'img/[name].[hash:8].[ext]',
                        publicPath: '/'
                    }
                }]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css'
        }),
        // 删除文件 保留新文件
        new CleanWebpackPlugin(),
        //生成 manifest 方便定位对应的资源文件
        new ManifestPlugin({
            fileName: '../src/server/asset-manifest.json',
        })

    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: {
                        drop_console: true,
                        drop_debugger: true
                    },
                    warnings: false,
                    ie8: true,
                    output: {
                        comments: false,
                    },
                },
                cache: true,
                parallel: true,
                sourceMap: false
            }),
            new OptimizeCSSAssetsPlugin()
        ],
        splitChunks: {
            cacheGroups: {
                libs: { // 抽离第三方库
                    test: /node_modules/, // 指定是node_modules下的第三方包
                    chunks: 'initial',
                    name: 'libs', // 打包后的文件名，任意命名    
                    // 设置优先级，防止和自定义的公共代码提取时被覆盖，不进行打包
                    priority: -10
                },
                commons: { // 抽离业务中的公共代码
                    chunks: 'initial',
                    test: /\.jsx?$/,
                    name: 'commons', // 任意命名
                    minSize: 0, // 只要超出0字节就生成一个新包
                    minChunks: 2,
                    priority: 5,
                    reuseExistingChunk: true
                }
            }
        }
    }
}