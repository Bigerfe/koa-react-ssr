// webpack/scripts/start.js
//整个编译服务的启动入口
//包括以下功能----
//服务端代码的首次编译 
//文件的监听
//前端代码的打包和 watch
//node服务的启动



//服务度代码编译完成后 启动node 服务
//服务代码每次编译后，重启node 服务


const {spawn} = require('child_process');//用于创建子进程
const constantCode = require('./constant');
const chalk = require('chalk');//为控制台输出的信息增加点色彩
const log = console.log;
const proConfig  = require('../../src/share/pro-config');

//node server port
const nodeServerPort = proConfig.nodeServerPort;

const getIp = require('../../src/server/common/get-ip');

const localHostIp = getIp();


log(chalk.red('servers starting....'));



//前端代码构建 服务进程
//const feCodeWatchProcess = spawn('npm', ['run', 'fe:watch'],{stdio:'inherit'});
const feCodeWatchProcess = spawn('npm', ['run', 'wds:watch', localHostIp], { stdio: 'inherit', shell: process.platform === 'win32' });

//服务端代码监控和编译进程
//服务端代码监控和编译进程
const svrCodeWatchProcess = spawn('npm', ['run', 'svr:watch'], {
    shell: process.platform === 'win32'
});
//node 服务进程
let nodeServerProcess=null;
//启动 node 服务
const startNodeServer = () => { //重启 node 服务 
    nodeServerProcess && nodeServerProcess.kill();
    nodeServerProcess = spawn('node', ['./webpack/scripts/svr-dev-server.js', localHostIp], { stdio: 'inherit', shell: process.platform === 'win32' });
}

//控制台输出信息
function print(data) {
    let str = data.toString();
    if (str.indexOf(constantCode.SVRCODECOMPLETED) > -1) { //服务端代码编译完成
        startNodeServer();//重启 node 服务
    } else {
        console.log(str);
    }
}

//监听服务端代码构建服务的对外输出  stdout 事件
svrCodeWatchProcess.stdout.on('data',print);

//杀掉子进程
const killChild=()=>{
    svrCodeWatchProcess && svrCodeWatchProcess.kill();
    nodeServerProcess && nodeServerProcess.kill();
    feCodeWatchProcess && feCodeWatchProcess.kill();
}

//主进程关闭退出子进程
process.on('close', (code) => {
    console.log('main process  close', code);
    killChild();
});
//主进程关闭退出子进程
process.on('exit', (code) => {
    console.log('main process  exit', code);
    killChild();
});

//非正常退出情况
process.on('SIGINT', function () {
    svrCodeWatchProcess.stdin.write('exit', (error) => {
        console.log('svr code watcher process exit!');
    });
    killChild();
});
