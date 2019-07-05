/**
 * node 文件同构编译
 */
//跨平台
const spawnSync = require('cross-spawn');
const path = require('path');
const chalk = require('chalk');

//节流一下 防止重编译太频繁
function throttle(filepath,callback) {
    clearTimeout(compileWatcher.tId);
    compileWatcher.tId = setTimeout(function () {
        compileWatcher(filepath);
        callback && callback();
    }, 500);
}

function compileWatcher(filepath) {
    //test环境下 babel用的是node环境需要区分
    //process.env.BABEL_ENV = 'test';
    //process.env.NODE_ENV = 'test';

    var fileName = /(client|server).*/.exec(filepath)[0];
    var ext = path.extname(fileName);

    console.log('=======',fileName);

    var newpath = path.resolve('dist/server', fileName);

    console.log(newpath);

    if (/\.(js|jsx)$/.test(ext)) {
        //, { stdio: 'inherit' } 此处不必重复输出
        spawnSync.sync('babel', [filepath, '--out-file', newpath]);
        console.log(chalk.yellow('compiled ' + filepath + ' to ' + newpath));
    } else if (/\.(ejs|tpl|html)$/.test(ext)) {
        try {
            //非js文件如template文件只负责到指定文件夹即可
            fs.copyFileSync(filepath, newpath);
            console.log(chalk.yellow('copyed ' + filepath + ' to ' + newpath));
        } catch (error) {
            console.log(chalk.yellow('copye ' + filepath + ' error! fs.copyFileSync需要8.5+ 请查看Node版本是否正确;'));
            console.log(error);
            process.exit(1);
        }
    } else if (/\.(scss|less|css)$/.test(ext)) {
        console.log(chalk.yellow('edited ' + filepath));
    }

}

module.exports = throttle;