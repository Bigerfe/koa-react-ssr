'use strict';

const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
const host = process.env.HOST || 'localhost';
const path = require('path');
const config = require('../config');

module.exports = function (port, publicPath) {
  return  {
    port: config.devWdsPort,
    host: process.env.LocalIP||'localhost',
    quiet: true,
    contentBase: path.resolve(__dirname, '../dist/static'),
    overlay: {
      error: true
    },
    publicPath: '/',
    hot: true,
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
    },
    historyApiFallback: true
  }
}