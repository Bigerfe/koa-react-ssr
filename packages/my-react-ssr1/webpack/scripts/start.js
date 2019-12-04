//整个编译服务的启动入口
//包括以下功能----
//服务端代码的首次编译 
//文件的监听
//前端代码的打包和 watcht
//node服务的启动

require('./free-port');

const serverFileWatchFn = require('./server-file-watch');
const { nodeHttpMonitor, restartServer} = require('./server-http-monitor');
const webapckDevConfig = require('../webpack.dev.config');
const webpack=require('webpack');
const spawn = require('child_process').spawn;
const chalk = require('chalk');
const log = console.log;

log(chalk.red('build server is running....'));


//服务端代码编译：首次运行 将服务端代码批量编译
spawn('npm', ['run', 'babel-node'], { stdio: 'inherit' });

serverFileWatchFn(restartServer);

nodeHttpMonitor(['app.js']);

spawn('npm', ['run', 'fe:watch'], { stdio: 'inherit' });


