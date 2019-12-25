const path = require('path');
const chalk = require('chalk');
const webpack = require('webpack');

const WebpackDevServer = require('webpack-dev-server');


//webapck dev 环境配置
const clientConfig = require('../webpack.dev.config');

//wds 配置
const getWdsConfig = require('../webpack-dev-server.config');


// 创建webpack compiler
function getWebPackCompiler() {
    return webpack(clientConfig);
}

//创建 wds 服务
function createWdsServer(port) {

    let compiler = getWebPackCompiler();

    return new WebpackDevServer(compiler, getWdsConfig(port,'http://localhost:9002'));
}

// 启动 WebpackDevServer.

function runWdsServer() {
    //9002端口启动热更新
    let port=9002;
    let devServer = createWdsServer(port);
    
    devServer.listen(port,'localhost',err => {
        if (err) {
            return console.log(err);
        }
        console.log(chalk.cyan('Starting the development node server...\n'));
        //TODO:这里先打开了浏览器，但是服务还没有起来,浏览器打开后需要等一下 会自动刷新
        //openBrowser(`http://${devServerConfig.host}:${isDevByWdsServer() ? projectConfig.devWdsPort : projectConfig.nodeServerPort}`);
        console.log('🚀 started');
    });

}


runWdsServer();


//收到退出信号 退出自身进程
process.stdin.on('data', function (data) {
    if (data.toString() === 'exit') {
        process.exit();
    }
});