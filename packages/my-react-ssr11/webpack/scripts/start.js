// webpack/scripts/start.js
//整个编译服务的启动入口
//包括以下功能----
//服务端代码的首次编译 
//文件的监听
//前端代码的打包和 watcht
//node服务的启动

const serverFileWatchFn = require('./server-file-watch');
const { nodeHttpMonitor, restartServer} = require('./server-http-monitor');
const webpack=require('webpack');
const {spawn} = require('child_process');//用于创建子进程
const constantCode = require('./constant');
const chalk = require('chalk');
const freePort= require('./free-port');
const log = console.log;

const nodeServerPort = 9001;

log(chalk.red('servers starting....'));

//wds 服务进程
const wdsProcess =  spawn('npm', ['run', 'wds:start']);

//服务端代码监控和编译进程
const svrCodeWatchProcess = spawn('npm', ['run', 'svr:watch']);

//node 服务进程
let nodeServerProcess=null;
//启动 node 服务
const startNodeServer=()=>{
    freePort(nodeServerPort);
    return nodeHttpMonitor(['./dist/server/app.js']);//重启 node 服务 
}

svrCodeWatchProcess.stdout.on('data', (data)=>{
    let str  = data.toString();
    console.log(str);
    if (str.indexOf(constantCode.SVRCODECOMPLETED)>-1){//服务端代码编译完成
        nodeServerProcess = startNodeServer();
    }
});
svrCodeWatchProcess.stderr.on('data', (data)=>{
    console.log('stderr: ' + data);
    console.log('---------');
});

svrCodeWatchProcess.on('close', function (code) {
    console.log('svr code watch 子进程 event close，退出码 ' + code);
});

svrCodeWatchProcess.on('exit', function (code,signal) {
    console.log('svr code watch 子进程 event exit ', code, signal);
});


//wds 进程
wdsProcess.stdout.on('data', (data) => {
    console.log(data.toString());
});

wdsProcess.on('close', function (code) {
    console.log('wds server 子进程 event close，退出码 ' + code);
});

wdsProcess.on('exit', function (code, signal) {
    console.log('wds server  子进程 event exit ', code, signal);
});

//主进程
process.on('close', (code) => {
    console.log('主进程 event close', code);
    svrCodeWatchProcess && svrCodeWatchProcess.kill();
});

process.on('exit', (code) => {
    console.log('主进程 event exit', code);
    svrCodeWatchProcess && svrCodeWatchProcess.kill();
});

process.on('SIGINT', function () {
    svrCodeWatchProcess.stdin.write('exit', (error) => {
        console.log('main process exit SIGINT 1 !');
    });
    wdsProcess.stdin.write('exit',(error)=>{
        console.log('main process exit SIGINT 1!');
    });

    nodeServerProcess && nodeServerProcess.kill();
});


//服务度代码编译完成后 启动node 服务
//服务代码每次编译后，重启node 服务
//wds 服务也可以加进来吧