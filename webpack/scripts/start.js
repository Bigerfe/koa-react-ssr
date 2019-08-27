'use strict';

const envUtils =require('./env-utils');

envUtils.setDev();

// 有错误直接抛出
process.on('unhandledRejection', err => {
    throw err;
});


const IPAddress = require('../../server/krs-base/common/other/local-ip')();
const config = require('../config');
console.log(`本机Ip为:${IPAddress}`);

if (!IPAddress) {
    throw Error('未获取到本机ip 无法启动');
}

const fs = require('fs');
const openBrowser = require('../common/open-browser');
const path = require('path');
const chalk = require('chalk');
const spawn = require('cross-spawn');
const projectConfig = require('../../dist/server/src/config/project-config').default;
//监听client server文件 change时用babel编译该文件
const chokidar = require('chokidar');
const webpack = require('webpack');
const nodeTransform = require('../common/node-transform');
const monitor = require('../common/node-monitor');
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
	projectConfig.devWdsPort,
    clientConfig.output.publicPath
);
const devServer = new WebpackDevServer(compiler, devServerConfig);
// 启动 WebpackDevServer.

devServer.listen(devServerConfig.port, devServerConfig.host, err => {
    if (err) {
        return console.log(err);
    }
	console.log(chalk.cyan('Starting the development node server...\n'));
	//TODO:这里先打开了浏览器，但是服务还没有起来,浏览器打开后需要等一下 会自动刷新
	openBrowser(`http://${devServerConfig.host}:${projectConfig.nodeServerPort}`);
    console.log('🚀 started');
});

console.log('===============');

//文件改变后，需要重新启动的服务入口
monitor.nodeMonitor(['app.js']);
console.log('===============');
console.log(chalk.cyan('node server is starting the watcher\n'));
//end

// 创建监控对象
var watcher = chokidar.watch([config.appServerSrc, config.appClientSrc], {
	ignored: /(^|[\/\\])\../,
	persistent: true
});
//文件内容发生改变，确切说的是 保存触发.就会重启 node 服务.但不会重启webpack 构建
watcher.on('change', path => {
	nodeTransform(path,monitor.restart);
	console.log('event change');
	console.log(path);
});
//新建文件
watcher.on('add', fpath => {
	if (/\.(ejs|tpl|html)$/.test(fpath)) {
		console.log('event add:html file add');
		console.log('add ' + fpath);
		var fileName = /(src|server).*/.exec(fpath)[0];
		var newpath = path.resolve('dist/server', fileName);
		try {
			//非js文件如template文件只负责到指定文件夹即可
			fs.copyFileSync(fpath, newpath);
			console.log(chalk.yellow('copyed ' + fpath + ' to ' + newpath));
		} catch (error) {
			console.log(chalk.yellow('copye ' + fpath + ' error! fs.copyFileSync需要8.5+ 请查看Node版本是否正确;'));
			console.log(error);
			process.exit(1);
		}
	}
});

//监听到添加文件夹 在build/server对应目录添加文件夹
watcher.on('addDir', fpath => {
	console.log('event addDir');
	var fileName = /(src|server).*/.exec(fpath)[0];
	var newpath = path.resolve('dist/server', fileName);
	console.log(fileName);
	let newFile;
	try {
		if (!fs.existsSync(newpath)) {
			fs.mkdirSync(newpath);
			console.log(chalk.yellow('mkdir ' + newpath + ' succeed'));
			//TODO:命令行创建页面和组件功能 ，后续再添加
			// //如果是npm run add 添加的会添加对应的js文件,调用babel把对应文件编译到build/server目录 
			// if (fileName && fileName.indexOf('pages') > 0) {
			// 	newFile = nodePath.join(path, 'index.js')
			// } else if (fileName && fileName.indexOf('components_common') > 0) {
			// 	newFile = nodePath.join(path, `${baseName}.js`)
			// }
			// if (fs.existsSync(newFile)) {
			// 	monitor.compileWatcher(newFile);
			// }
		}
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
});





['SIGINT', 'SIGTERM'].forEach(function (sig) {
    process.on(sig, function () {
        devServer.close();
        process.exit();
    });
});

