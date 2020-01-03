// webpack/webpack.dev.config.js
//webpack 配置文件
const path = require('path')
const nodeExternals = require('webpack-node-externals')

const resolvePath = (pathstr) => path.resolve(__dirname, pathstr);

process.env.BABEL_ENV = 'node';

module.exports = {
    target:'node',
    mode: 'development',
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
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader"
                    },
                    {
                        loader: "postcss-loader"
                    }
                ]
            }
        ]
    }
}
