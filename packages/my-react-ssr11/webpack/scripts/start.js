// webpack/scripts/start.js
//整个编译服务的启动入口
//包括以下功能----
//服务端代码的首次编译 
//文件的监听
//前端代码的打包和 watcht
//node服务的启动



//服务度代码编译完成后 启动node 服务
//服务代码每次编译后，重启node 服务
//wds 服务也可以加进来吧

const webpack=require('webpack');
const {spawn} = require('child_process');//用于创建子进程
const constantCode = require('./constant');
const chalk = require('chalk');
const freePort= require('./free-port');
const log = console.log;

const nodeServerPort = 9001;

log(chalk.red('servers starting....'));



//wds 服务进程
const wdsProcess =  spawn('npm', ['run', 'wds:start'],{stdio:'inherit'});

//服务端代码监控和编译进程
const svrCodeWatchProcess = spawn('npm', ['run', 'svr:watch']);

//node 服务进程
let nodeServerProcess=null;
//启动 node 服务
const startNodeServer = () => { //重启 node 服务 
    nodeServerProcess && nodeServerProcess.kill();
    nodeServerProcess = spawn('node',['./webpack/scripts/svr-dev-server.js']);
    nodeServerProcess.stdout.on('data', print);
}

//控制台输出信息
function print(data) {
    let str = data.toString();
    if (str.indexOf(constantCode.SVRCODECOMPLETED) > -1) {//服务端代码编译完成
        startNodeServer();
    } else {
        console.log(str);
    }
}

svrCodeWatchProcess.stdout.on('data',print);

//杀掉子进程
const killChild=()=>{
    svrCodeWatchProcess && svrCodeWatchProcess.kill();
    nodeServerProcess && nodeServerProcess.kill();
    wdsProcess && wdsProcess.kill();
}

//主进程
process.on('close', (code) => {
    console.log('main process  close', code);
    killChild();
});

process.on('exit', (code) => {
    console.log('main process  exit', code);
    killChild();
});

//非正常退出
process.on('SIGINT', function () {
    svrCodeWatchProcess.stdin.write('exit', (error) => {
        console.log('svr code watcher process exit!');
    });
    killChild();
});
