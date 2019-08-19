const webpack = require('webpack');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const Dashboard = require('webpack-dashboard');
// const DashboardPlugin = require('webpack-dashboard/plugin');
// const dashboard = new Dashboard();
//////////******** */

const wpConfig = require('./webpack.config.base');
const formatMessages = require('./common/format-messages');

wpConfig.mode = 'production';
wpConfig.devtool = 'none';

wpConfig.module.rules.push({
    test: /\.(sa|sc|c)ss$/,
    use: [{
        loader: MiniCssExtractPlugin.loader,
        options: {
            hmr: false
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
        filename: 'client/css/[name].[contenthash:8].css',
        chunkFilename: 'client/css/[name].[contenthash:8].css',
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
    new webpack.DefinePlugin({
        "process.env.IS_DEV": false,
        __SERVER__: false,
        __CLIENT__: true
    })
];

wpConfig.plugins = wpConfig.plugins.concat(plugins);

const handler = (percentage, message, ...args) => {
    // e.g. Output each progress message directly to the console:
    console.info(percentage, message, ...args);
};

wpConfig.optimization = {
    minimizer: [
        new UglifyJsPlugin(),
        new OptimizeCSSAssetsPlugin(),
        new webpack.ProgressPlugin(handler)
    ],
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
                chunks: 'async',
                name: 'commons', // 任意命名
                minSize: 0, // 只要超出0字节就生成一个新包
                minChunks: 2,
                priority: 5,
                reuseExistingChunk: true
            }
        }
    }
    // runtimeChunk: {
    //     name: entrypoint => `manifest.${entrypoint.name}`
    // }
}



const comipler = webpack(wpConfig);



comipler.run((error, stats) => {
    var res = formatMessages(stats.toJson({}, true));
    if (res.errors.length) {
        console.log('Failed to compile.\n');
        //比如parse失败 通常会返回两个同样的错误 一个parse fail一个module build
        //fail 但是内容是一样的；我们只取第一个即可;
        res.errors.length = 1;
        console.log(res.errors.join('\n\n'));
    } else if (res.warnings.length) {
        console.log('Compiled with warnings.\n');
        console.log(res.warnings.join('\n\n'));
    }
});



//module.exports = wpConfig;