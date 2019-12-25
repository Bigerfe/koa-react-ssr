// webpack/scripst/server-http-monitor
/**
 * 控制 node 服务启动和停止
 */

const spawn = require('child_process').spawn;
const chalk = require('chalk');
const log = console.log;
const fs = require('fs');
const util = require('util');
const path = require('path');
const { StringDecoder } = require('string_decoder');

//临时变量
var child, globalStr;

//启动http 服务
function nodeHttpMonitor(options) {
    if (!options) {
        print('need options nodeMonitor([\'./app.js\'])');
        process.exit(0);
    }
   
    if (child) {//启动前杀掉进程
        child.kill();
        log(chalk.green('node server is started.'))
    }

    globalStr = options;
    return run(options);
}

function run(options) {
    child = spawn('node', options);
    child.stdout.on('data', print);
    child.stderr.on('data', print);
    return child;
}

function print(data) {
    const decoder = new StringDecoder('utf8');
    const cent = Buffer.from(data);
    console.log(decoder.write(cent));
}

//重启服务
function restartServer() {
    if (child) {
        child.kill();
        log(chalk.green('node server is started.'))
    }
    run(globalStr);
}


module.exports = {
    nodeHttpMonitor, restartServer
} ;