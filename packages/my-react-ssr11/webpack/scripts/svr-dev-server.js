//开发环境 node 服务启动入口

//启动前检查端口是否占用，杀掉占用端口的进程
require('./free-port')(9001);

require('../../dist/server/app');



//收到退出信号 退出自身进程
process.stdin.on('data', function (data) {
    if (data.toString() === 'exit') {
        process.exit();
    }
});

