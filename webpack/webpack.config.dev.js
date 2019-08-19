const webpack = require('webpack');
const path = require('path');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
// const Dashboard = require('webpack-dashboard');
// const DashboardPlugin = require('webpack-dashboard/plugin');
// const dashboard = new Dashboard();
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const friendlyError = require('friendly-errors-webpack-plugin');
//////********/
const wpConfig = require('./webpack.config.base');




wpConfig.mode = 'development';

wpConfig.devtool = 'cheap-module-eval-source-map';

wpConfig.module.rules.push({
    test: /\.(sa|sc|c)ss$/,
    use: [{
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
    },
    {
        loader: "postcss-loader"
    }
    ]
});
wpConfig.module.rules.push({
    test: /\.(png|jpg|gif)$/,
    use: [
        {
            loader: 'url-loader',
            options: {
                limit: 5000,
                name: 'img/[name].[hash:8].[ext]'
            }
        }
    ]
});

const plugins = [
    new MiniCssExtractPlugin({
        // 类似 webpackOptions.output里面的配置 可以忽略
        //filename: '[name].[contenthash:8].css',
        filename: 'client/[name].css',
        chunkFilename: 'client/[name].css',
    }),
    //做服务端渲染需要删除这个配置
    new HtmlWebPackPlugin({
        title: 'this is the title',
        filename: 'index.html',
        template: './server/temp/csr.html',
        inject: 'body',
        favicon: '',
        minify: {},
    }),
    // 删除文件 保留新文件
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
        "process.env.IS_DEV": true,
        __SERVER__: false,
        __CLIENT__: true
    }),
    new friendlyError()
    // new DashboardPlugin(dashboard.setData),
    // new ProgressBarPlugin({
    //     format: 'build [:bar] :percent (:elapsed seconds)',
    //     clear: false,
    //     width: 60
    // })
];


wpConfig.plugins = wpConfig.plugins.concat(plugins);
wpConfig.optimization = {
    splitChunks: {
        cacheGroups: {
            styles: {
                name: 'styles',
                    test: /\.scss$/,
                        chunks: 'all',
                            enforce: true,
                },
            // libs: { // 抽离第三方插件
            //     test: /node_modules/, // 指定是node_modules下的第三方包
            //         chunks: 'initial',
            //             name: 'libs', // 打包后的文件名，任意命名    
            //                 // 设置优先级，防止和自定义的公共代码提取时被覆盖，不进行打包
            //                 priority: -10
            // },
            // commons: { // 抽离自己写的公共代码，utils这个名字可以随意起
            //     chunks: 'async',
            //         name: 'commons', // 任意命名
            //             minSize: 0, // 只要超出0字节就生成一个新包
            //                 minChunks: 2,
            //                     priority: 5,
            //                         reuseExistingChunk: true
            // }
        }
    }
};

module.exports = wpConfig;