// webpack/webpack.dev.config.js
//webpack 配置文件
const path = require('path')
const webpack = require('webpack');
//提取 css  插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const resolvePath = (pathstr) => path.resolve(__dirname, pathstr);


module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry:{
        main: ['react-hot-loader/patch', resolvePath('../src/client/app/index.js')],//入口文件
    },
    output: {
        filename: '[name].js',
        path: resolvePath('../dist/static'),
        publicPath:'http://localhost:9002/'
    },
    module: {
        rules: [{
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: true//开启热更新
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
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name:'img/[name].[ext]',
                            //emitFile:false //是否禁止生成文件
                        }
                    }
                ]
            }
        ]
    },
    plugins: [new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css' //设置名称
        })],
    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.scss$/,
                    chunks: 'all',
                    enforce: true,
                },
                libs: { // 抽离第三方插件
                    test: /node_modules/, // 指定是node_modules下的第三方包
                    chunks: 'initial',
                    name: 'libs', // 打包后的文件名，任意命名    
                    // 设置优先级，防止和自定义的公共代码提取时被覆盖，不进行打包
                    priority: -10
                }
            }
        }
    },
    resolve: {
        alias: {
        'react-dom': '@hot-loader/react-dom',
        }
  }
}
