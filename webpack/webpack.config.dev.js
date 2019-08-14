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
    new HtmlWebPackPlugin({
        title: 'this is the title',
        filename: 'index.html',
        template: './server/temp/index.html',
        inject: 'body',
        favicon: '',
        minify: {

        },
    }),
    // 删除文件 保留新文件
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
        "process.env.IS_DEV": true
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

module.exports = wpConfig;