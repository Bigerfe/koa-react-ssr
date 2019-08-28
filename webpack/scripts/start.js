'use strict';

const processArgvs= process.argv;
const RunSource ='--scripts';
const envUtils = require('./env-utils');


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
const spawnSync = require('cross-spawn');
const fs = require('fs');
const openBrowser = require('../common/open-browser');
const path = require('path');
const chalk = require('chalk');
const spawn = require('cross-spawn');
const projectConfig = require('../../dist/server/src/config/project-config').default;
//监听client server文件 change时用babel编译该文件
const chokidar = require('chokidar');
const webpack = require('webpack');
const fileWatchCompiler = require('../common/node-transform');
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
	console.log('event change');
	fileWatchCompiler.lazyCompileWatcher(path, monitor.restart);
	console.log(path);
});
//新建文件
watcher.on('add', filepath => {
	console.log('file wacher : add');

	var fileName = /(src|server).*/.exec(filepath)[0];
	var ext = path.extname(fileName);

	var newpath = path.resolve('dist/server', fileName);
	if (/\.(ejs|tpl|html)$/.test(ext)) {
		try {
			//非js文件如template文件只负责到指定文件夹即可
			fs.copyFileSync(filepath, newpath);
			console.log(chalk.yellow('copyed ' + filepath + ' to ' + newpath));
		} catch (error) {
			console.log(chalk.yellow('copye ' + filepath + ' error! fs.copyFileSync需要8.5+ 请查看Node版本是否正确;'));
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
	console.log('newpath',newpath);
	try {
		if (!fs.existsSync(newpath)) {
			fs.mkdirSync(newpath);
			if (fpath.indexOf('empty-folder-create-by-krscli') > -1 && fpath.indexOf('/src/pages/')>-1){
				var sourcePageFolder = path.resolve(fileName.match(/(src\/pages\/\w+\/)/)[1]);
				var destPageFolder = path.resolve('dist/server', fileName.match(/(src\/pages\/\w+\/)/)[1]);

				//创建后需要做一些操作
				console.log('sourcePageFolder');
				console.log(sourcePageFolder);
				console.log(destPageFolder);
				fileWatchCompiler.lazyCompileWatcher('none.js',function () {
					process.env.BABEL_ENV='node';
					spawnSync.sync('babel', [sourcePageFolder, '-d', destPageFolder]);
					process.env.BABEL_ENV = 'development';
					//src 路由入口写入 后会自动重启
					spawnSync.sync('npm', ['run','chai-routes']);

				});
			}
			console.log(chalk.yellow('mkdir ' + newpath + ' succeed'));

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

