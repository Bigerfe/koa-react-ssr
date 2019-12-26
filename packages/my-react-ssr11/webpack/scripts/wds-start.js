const path = require('path');
const chalk = require('chalk');
const webpack = require('webpack');
const freePort = require('./free-port');
const WebpackDevServer = require('webpack-dev-server');
const open = require('./open-browser');
let compilationTime=0;//编译次数

//释放端口
freePort(9002);

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
    compiler.hooks.done.tap('done', function (data) {
        console.log('\n 》》》》》》wds done'); //编译完成的时候 
        if (compilationTime===0){//第一次编译完成的时，自动打开浏览器
            open('http://localhost:9001/');
        }
        compilationTime+=1;
    });

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
        console.log(chalk.cyan('🚀 Starting the development node server,please wait....\n'));
    });

}


runWdsServer();


//收到退出信号 退出自身进程
process.stdin.on('data', function (data) {
    console.log('in data');
    console.log(data);
    if (data.toString() === 'exit') {
        process.exit();
    }
});

