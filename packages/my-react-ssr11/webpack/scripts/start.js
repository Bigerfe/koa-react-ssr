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
const {spawn} = require('child_process');//用于创建子进程
const constantCode = require('./constant');
const chalk = require('chalk');
const log = console.log;

log(chalk.red('servers starting....'));



//启动客户端代码构建监听 非热更新
//spawn('npm', ['run', 'fe:watch'], { stdio: 'inherit' });

//spawn('npm', ['run', 'wds:start'], { stdio: 'inherit' });

//启动 服务端代码编译和监听
//let processServer = child_process.spawn('npm', ['run', 'svr:watch'], { stdio: 'inherit' });


// let processServer = child_process.exec('npm run svr:watch', function (error,stdout,stderr) {
//     if(error){
//         console.log(error.stack);
//     }

//     console.log(stdout);
//     console.log(stderr);
// });

// processServer.on('exit', function (code) {
//     console.log('子进程已退出，退出码 ' + code);
// });
//wds 服务进程
const wdsProcess =  spawn('npm', ['run', 'wds:start']);

//服务端代码监控和编译进程
const svrCodeWatchProcess = spawn('npm', ['run', 'svr:watch']);

svrCodeWatchProcess.stdout.on('data', (data)=>{
    let str  = data.toString();
    console.log(str);
    if (str.indexOf(constantCode.SVRCODECOMPLETED)>-1){//服务端代码编译完成
        console.log('服务启动');
        nodeHttpMonitor(['./dist/server/app.js']);//重启 node 服务 
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
});


//服务度代码编译完成后 启动node 服务
//服务代码每次编译后，重启node 服务
//wds 服务也可以加进来吧