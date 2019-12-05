// /webpack/scripts/server-file-watch
//服务端代码监控

const chokidar = require('chokidar');
const path = require('path');
const spawn = require('cross-spawn');
const chalk = require('chalk');
const log = console.log;
const watchFolder = path.resolve(__dirname,'../../src');

/**
 * 提取出文件编译的方法，因为需要多出调用。在启动监听出发的是 add 事件，在后续更改的时候出发的change 事件。
 * @param {需要编译的文件} filepath 
 */
function buildFile(filepath, spawn) {
    var fileName = /(src).*/.exec(filepath)[0];//文件路径
    var newpath = path.resolve('dist/', fileName);//编译到的目标文件地址

    spawn.sync('babel', [filepath, '--out-file', newpath]);
    log(chalk.green('build ok', getFileName(newpath)));
}

function getFileName(path) {
    return /(src|dist).*/.exec(path)[0];//文件路径
}


//文件监控方法
module.exports = function run(restartServer) {

    // 创建监控对象
    var watcher = chokidar.watch([watchFolder], {
        ignored: /(^|[\/\\])\../,
        persistent: true
    });
    //文件内容发生改变
    watcher.on('addDir', path =>{
        var fileName = /(src).*/.exec(path)[0];//文件路径
        log(chalk.cyan(`add dir ${fileName}`));
    }).on('change', filepath => {
        log(chalk.yellow('change file', getFileName(filepath)));
            buildFile(filepath, spawn);

            //文件发生改变，重启node 服务
            restartServer();
        })//添加文件
        .on('add', filepath => {

        })//发生错误
        .on('error', error => {
            chalk.red('watch error:', error);
        })


    console.log('svr file watching......');
}
