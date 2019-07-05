/**
 * node 文件监控模块
 * 支持增量编译
 */
const spawn = require('child_process').spawn;
const chalk = require('chalk');
const fs = require('fs');
const util = require('util');
const path = require('path');
const { StringDecoder } = require('string_decoder');

var child, globalStr;

function nodeMonitor(options) {
    if (!options) {
        print('need options nodeMonitor([\'./app.js\'])');
        process.exit(0);
    }
    globalStr = options;
    run(options);
}

function run(options) {
    child = spawn('node', options);
    child.stdout.on('data', print);
    child.stderr.on('data', print);
    process.stdin.pipe(child.stdin);
}

function print(data) {
    const decoder = new StringDecoder('utf8');
    const cent = Buffer.from(data);
    console.log(decoder.write(cent));
}

function restart() {
    if (child) {
        child.kill();
    }
    run(globalStr);
}

module.exports = {
    nodeMonitor, restart
} ;