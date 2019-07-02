const webpack = require('webpack');
const path = require('path');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const Dashboard = require('webpack-dashboard');
const DashboardPlugin = require('webpack-dashboard/plugin');
const dashboard = new Dashboard();
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
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

wpConfig.devServer = {
    port: 8809,
    host: 'localhost',
    quiet: true,
    contentBase: path.resolve(__dirname,'../dist'),
    overlay: {
        error: true
    },
    publicPath: '/',
    hot: true,
    open: true,
    compress: true,
    watchContentBase: true,
    watchOptions: {
        ignored: /node_modules/,
        //当第一个文件更改，会在重新构建前增加延迟。
        //这个选项允许 webpack 将这段时间内进行的任何其他更改都聚合到一次重新构建里。以毫秒为单位：
        aggregateTimeout: 500,
        //指定毫秒为单位进行轮询
        poll: 500
    },
    headers: {
        'Access-Control-Allow-Origin': '*'
    },
    historyApiFallback: true
};

const plugins = [
    new MiniCssExtractPlugin({
        // 类似 webpackOptions.output里面的配置 可以忽略
        //filename: '[name].[contenthash:8].css',
        filename: '[name].css',
        chunkFilename: '[name].css',
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
    new DashboardPlugin(dashboard.setData),
    new ProgressBarPlugin({
        format: 'build [:bar] :percent (:elapsed seconds)',
        clear: false,
        width: 60
    })
];


wpConfig.plugins = wpConfig.plugins.concat(plugins);

module.exports = wpConfig;