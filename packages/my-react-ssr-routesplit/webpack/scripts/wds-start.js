// webpack/scripts/wds-start.js

//wds 服务启动

const path = require('path');
const chalk = require('chalk');
const webpack = require('webpack');
const freePort = require('./free-port');
const WebpackDevServer = require('webpack-dev-server');
const open = require('./open-browser');
const proConfig = require('../../src/share/pro-config');


let compilationTime=0;//编译次数

const WDS_PORT = proConfig.wdsPort;//wds 服务端口

const NODE_SERVER_PORT=proConfig.nodeServerPort;//node 服务端口

const HOST='localhost';

//释放wds端口
freePort(proConfig.wdsPort);

//webapck dev 前端构建环境配置
const clientConfig = require('../webpack.dev.config');

//wds 配置
const getWdsConfig = require('./webpack-dev-server.config');

// 创建webpack compiler
function getWebPackCompiler() {
    return webpack(clientConfig);
}

//创建 wds 服务
function createWdsServer(port) {

    let compiler = getWebPackCompiler();
    compiler.hooks.done.tap('done', function (data) {
        console.log('\n wds server compile done'); //编译完成的时候 
        if (compilationTime===0){//第一次编译完成的时，自动打开浏览器
           // open(`http://localhost:${NODE_SERVER_PORT}/`);
        }
        compilationTime+=1;
    });

    return new WebpackDevServer(compiler, getWdsConfig(port, clientConfig.output.publicPath));
}

// 启动 WebpackDevServer.
function runWdsServer() {

    let devServer = createWdsServer(WDS_PORT);
    devServer.listen(WDS_PORT, HOST,err => {
        if (err) {
            return console.log(err);
        }
        console.log(chalk.cyan('🚀 Starting the development node server,please wait....\n'));
    });

}


runWdsServer();


