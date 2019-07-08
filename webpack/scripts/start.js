'use strict';
// 有错误直接抛出
process.on('unhandledRejection', err => {
    throw err;
});

const IPAddress = require('../common/local-ip')();
const config = require('../config');
console.log(`本机Ip为:${IPAddress}`);

if (!IPAddress) {
    throw Error('未获取到本机ip 无法启动');
}

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
//监听client server文件 change时用babel编译该文件
const chokidar = require('chokidar');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const { createCompiler } = require('../common/dev-server-utils');

//客户端的config配置文件
const clientConfig = require('../../webpack/webpack.config.dev');

//开发环境webpackDevServer 配置内容
const createDevServerConfig = require('../common/webpack-devserver.config');

// 创建客户端的compiler
const compiler = createCompiler(webpack, clientConfig);

// 获取WebpackDevServer配置
//WebpackDevServer是client端port为3001
const devServerConfig = createDevServerConfig(
    8009,
    clientConfig.output.publicPath
);
const devServer = new WebpackDevServer(compiler, devServerConfig);
// 启动 WebpackDevServer.

devServer.listen(devServerConfig.port, devServerConfig.host, err => {
    if (err) {
        return console.log(err);
    }
    console.log(chalk.cyan('Starting the development server...\n'));
    //已内置不，不需要手动启动了
    //const openBrowser = require('../common/open-browser');
    //openBrowser(`http://${devServerConfig.host}:${devServerConfig.port}`);
    console.log('🚀 started');
});

console.log('===============');

const spawn = require('cross-spawn');
//启动 node 服务
spawn('npm', ['run', 'babel'], { stdio: 'inherit' });



const nodeTransform = require('../common/node-transform');
const monitor = require('../common/node-monitor');


let nodeParams = ['app.js'];
//本地测试预上线环境地址
if (global.env_prod) {
	nodeParams = nodeParams.concat(['--env', 'prodTest']);
}
console.log('===============');
console.log(nodeParams);
monitor.nodeMonitor(nodeParams);
console.log(chalk.cyan('node server is starting the watcher\n'));
// Initialize watcher.
console.log(config.appServerSrc);
var watcher = chokidar.watch([config.appServerSrc], {
	ignored: /(^|[\/\\])\../,
	persistent: true
});
watcher.on('change', path => {
	nodeTransform(path,monitor.restart);
	console.log('event change');
	console.log(path);
});

// watcher.on('add', path => {
// 	console.log('event add');
// 	console.log('add '+path);
//     //let ext = nodePath.extname(path);
// });

//监听到添加文件夹 在build/server对应目录添加文件夹
watcher.on('addDir', path => {
	// console.log('event addDir');
	// var fileName = /(client|server).*/.exec(path)[0];
	// var newpath = path.resolve('dist/server', fileName);
	// console.log(fileName);
	// var baseName = nodePath.basename(path);
	// let newFile;
	// try {
	// 	if (!fs.existsSync(newpath)) {
	// 		fs.mkdirSync(newpath);
	// 		console.log(chalk.yellow('mkdir ' + newpath + ' succeed'));
	// 		//如果是npm run add 添加的会添加对应的js文件,调用babel把对应文件编译到build/server目录 
	// 		if (fileName && fileName.indexOf('pages') > 0) {
	// 			newFile = nodePath.join(path, 'index.js')
	// 		} else if (fileName && fileName.indexOf('components_common') > 0) {
	// 			newFile = nodePath.join(path, `${baseName}.js`)
	// 		}
	// 		if (fs.existsSync(newFile)) {
	// 			monitor.compileWatcher(newFile);
	// 		}
	// 	}
	// } catch (error) {
	// 	console.log(error);
	// 	process.exit(1);
	// }
});





['SIGINT', 'SIGTERM'].forEach(function (sig) {
    process.on(sig, function () {
        devServer.close();
        process.exit();
    });
});

