// webpack/webpack-dev-server.config.js
// wds 配置文件

const path = require('path');

module.exports = function (port, publicPath) {
    return {
        host: global.__LOCAL_IP__,
        quiet: true,
        port,//wds 服务端口
        contentBase: path.resolve(__dirname, '../../dist/static'),
        publicPath: publicPath,//必须和 webpack.dev.cnofig保持一致
        hot: true,
        progress: true,
        open: false,
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
        }
    }
}