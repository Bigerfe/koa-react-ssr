const envUtils = require('./scripts/env-utils');
const webpack = require('webpack');
const path = require('path');
const config = require('./config');
const resolvePath = p => path.resolve(__dirname, p);

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

const OutPutPath = resolvePath('../dist/static');
const JsFileName = 'krs-static/js/[name].js';
const JsChunkFileName ='krs-static/js/[name].js';
const CssFileName ='krs-static/css/[name].css';
const CssChunkFileName = 'krs-static/css/[name].css';
const ImgFileName = 'krs-static/img/[name].[ext]';

const wpConfig ={
    entry: { entry: ['react-hot-loader/patch',  resolvePath('../src/app/index.js')]},
    output: {
        path: OutPutPath,
        publicPath: config.devStaticResourceHost,
        filename: JsFileName,
        chunkFilename: JsChunkFileName
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            use: [{
                loader: "babel-loader"
            }]
        }]
    },
    plugins: []
}



wpConfig.mode = 'development';

wpConfig.devtool = 'inline-source-map';


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
    use: [{
        loader: 'url-loader',
        options: {
            limit: 5000,
            name: ImgFileName
        }
    }]
});

const plugins = [
    new MiniCssExtractPlugin({
        // 类似 webpackOptions.output里面的配置 可以忽略
        //filename: '[name].[contenthash:8].css',
        filename:CssFileName,
        chunkFilename:CssChunkFileName
    }),
    //做服务端渲染需要删除这个配置
    new HtmlWebPackPlugin({
        title: 'this is the title',
        filename: 'index.html',
        template: './server/krs-base/temp/csr.html',
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
    new friendlyError(),
    // new DashboardPlugin(dashboard.setData),
    new ProgressBarPlugin({
        format: 'build [:bar] :percent (:elapsed seconds)',
        clear: false,
        width: 60
    })
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
            libs: { // 抽离第三方插件
                test: /node_modules/, // 指定是node_modules下的第三方包
                chunks: 'initial',
                name: 'libs', // 打包后的文件名，任意命名    
                // 设置优先级，防止和自定义的公共代码提取时被覆盖，不进行打包
                priority: -10
            },
            commons: { // 抽离自己写的公共代码，utils这个名字可以随意起
                chunks: 'async',//按需加载
                    name: 'commons', // 任意命名
                        minSize: 0, // 只要超出0字节就生成一个新包
                            minChunks: 2,
                                priority: 5,
                                    reuseExistingChunk: true
            }
        }
    }
};

wpConfig.resolve={
        extensions: ['.js', '.jsx','.json'],
        alias: {
            '@project-config': './dist/server/src/config/project-config.js'
        }
}

module.exports = wpConfig;