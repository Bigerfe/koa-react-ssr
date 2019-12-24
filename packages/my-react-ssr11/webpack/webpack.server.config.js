// webpack/webpack.dev.config.js
//webpack 配置文件
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const webpack = require('webpack');
const resolvePath = (pathstr) => path.resolve(__dirname, pathstr);

process.env.BABEL_ENV = 'node';

module.exports = {
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
            test: /.(png|jpg|gif)$/,
            use: {
                loader: 'file-loader',
                options: {
                    emitFile: false,
                    name: 'img/[name].[hash:8].[ext]'
                }
            }
        }
        ]
    },
    plugins: [new webpack.HashedModuleIdsPlugin()]
}
