// webpack/webpack.dev.config.js
//webpack 配置文件
const path = require('path')
const webpack = require('webpack');

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
        publicPath:'http://localhost:9002/'//路由拆分的时候需要设置，否则会找不到文件,需要设置成 wds 服务的地址 必须带/
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
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name:'img/[name].[ext]',
                            publicPath: 'http://localhost:9002/'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.HashedModuleIdsPlugin()],
    optimization: {
        splitChunks: {
            cacheGroups: {
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
