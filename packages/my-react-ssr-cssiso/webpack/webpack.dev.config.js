const path = require('path')
//提取 css  插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const resolvePath = (pathstr) => path.resolve(__dirname, pathstr);
const webpack=require('webpack');

module.exports = {
    mode: 'development',
    entry: {
        main:['react-hot-loader/patch',resolvePath('../src/client/app/index.js')] //入口文件
    },
    output: {
        filename: '[name].js',
        path: resolvePath('../dist/static'),
        publicPath: 'http://localhost:9002/'
    },
    module: {
        rules: [{
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: ['isomorphic-style-loader',
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 2
                        }
                    }, 'postcss-loader', 'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'img/[name].[ext]' //配置图片的输出路径和名称
                    }
                }]

            }
        ]
    },
    plugins: [
        new HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css' //设置名称
        }),
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: '"development"' },
            '__IS_PROD__': false,
            '__SERVER__': false
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                libs: { // 抽离第三方库
                    test: /node_modules/, // 指定是node_modules下的第三方包
                    chunks: 'initial',
                    name: 'libs'// 打包后的文件名，任意命名    
                }
            }
        }
    },
     resolve: {
        alias: {
            'react-dom': '@hot-loader/react-dom'
        }
    }
}