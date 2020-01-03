// webpack/webpack.dev.config.js
//webpack 配置文件
const path = require('path')
const webpack = require('webpack');

const resolvePath = (pathstr) => path.resolve(__dirname, pathstr);


module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: ['react-hot-loader/patch', resolvePath('../src/client/app/index.js')],//入口文件
    output: {
        filename: 'index.js',
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
                        loader: "style-loader",
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
                        loader: 'file-loader',
                        options: {
                            name:'img/[name].[ext]',
                            emitFile:false
                        }
                    }
                ]
            }
        ]
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    resolve: {
        alias: {
        'react-dom': '@hot-loader/react-dom',
        }
  }
}
