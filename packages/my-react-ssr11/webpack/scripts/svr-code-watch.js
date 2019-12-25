
//基于 webpack  开启对服务端代码的编译和监听 
//配置文件为 webpack.server.config.js

const webpack  = require('webpack');

const config =  require('../webpack.server.config');

const constantCode = require('./constant');

config.mode='development';//设置编译模式


//编译对象
const compiler = webpack(config);

const watching = compiler.watch({
    aggregateTimeout: 300, // 类似节流功能,聚合多个更改一起构建
    ignored: /node_modules/, //排除文件
    poll: 2000, //轮训的方式检查变更 单位：秒  ,如果监听没生效，可以试试这个选项.
    'info-verbosity': 'verbose',//在增量构建的开始和结束时，向控制台发送消息
}, (err, stats) => {
   
    let json = stats.toJson("minimal");
    if(json.errors){
        console.log('svr code 编译出错数量', json.errors.length);
        json.errors.forEach(item => {
            console.log(item);
        });
    }
    if (json.warnings) {
        console.log('svr code 编译警告数量', json.warnings.length);
        json.warnings.forEach(item => {
            console.log(item);
        });
    }
    //console.log(json);

    //编译完成后 通知主进程来重启node 服务
    console.log(constantCode.SVRCODECOMPLETED);
    console.log('svr code compile callback invoke');

});


//收到退出信号 退出自身进程
process.stdin.on('data', function (data) {
    if (data.toString() === 'exit') {
        process.exit();
    }
});