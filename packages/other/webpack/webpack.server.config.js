// webpack/webpack.dev.config.js
//webpack 配置文件
const path = require('path')
const nodeExternals = require('webpack-node-externals')

const resolvePath = (pathstr) => path.resolve(__dirname, pathstr);

process.env.BABEL_ENV = 'node';

module.exports = {
    target:'node',
    mode: 'production',
    entry: resolvePath('../src/server/app/index.js'),//入口文件
    output: {
        filename: 'app.js',
        path: resolvePath('../')
    },
    externals: [nodeExternals()],
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
                            importLoaders: 1
                        }
                    },'postcss-loader','sass-loader'
                ]
            },
            {
                test:/.(png|jpg|gif)$/,
                use:{
                    loader:'file-loader',
                    options:{
                        emitFile:false,
                        publicPaht:'//9002/[name].[ext]'
                    }
                }
            }
        ]
    }
}
