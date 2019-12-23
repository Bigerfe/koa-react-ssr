// webpack/scripts/start.js
//整个编译服务的启动入口
//包括以下功能----
//服务端代码的首次编译 
//文件的监听
//前端代码的打包和 watcht
//node服务的启动

require('./free-port');

const serverFileWatchFn = require('./server-file-watch');
const { nodeHttpMonitor, restartServer} = require('./server-http-monitor');
const webpack=require('webpack');
const spawn = require('child_process').spawn;
const crossSpawn = require('cross-spawn');


const chalk = require('chalk');
const log = console.log;

log(chalk.red('build starting....'));


//服务端代码编译：首次运行 将服务端代码批量编译
//crossSpawn.sync('npm', ['run', 'babel-node'], { stdio: 'inherit' });

//监听服务端用到的文件
serverFileWatchFn(restartServer);


//启动客户端代码构建监听
//spawn('npm', ['run', 'fe:watch'], { stdio: 'inherit' });

spawn('npm', ['run', 'wds:start'], { stdio: 'inherit' });

spawn('npm', ['run', 'server:watch'], { stdio: 'inherit' });


//node server 监听并自动重启
nodeHttpMonitor(['./app.js']);


