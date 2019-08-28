/**
 * node 文件同构编译
 */
//跨平台
const spawnSync = require('cross-spawn');
const path = require('path');
const chalk = require('chalk');
const fs = require('fs');

//节流一下 防止重编译太频繁
function throttle(filepath, callback) {
    //TODO:此处增加了节流，多次修改一个文件没问题 
    clearTimeout(compileWatcher.tId);
    compileWatcher.tId = setTimeout(function () {
        filepath!=='none.js' && compileWatcher(filepath);
        if (/\.(js|jsx)$/.test(filepath)){//js文件的修改才会重启服务
            console.log('callback runner');
            callback && callback();//重启服务
        }
    }, 500);
}

//开始编译文件
function compileWatcher(filepath) {
    //dev环境下 babel用的是node环境需要区分
    process.env.BABEL_ENV = 'node';
    console.log('file watcher', filepath);
    var fileName = /(src|server).*/.exec(filepath)[0];
    var ext = path.extname(fileName);

    var newpath = path.resolve('dist/server', fileName);

    if (/\.(js|jsx)$/.test(ext)) {
        spawnSync.sync('babel', [filepath, '--out-file', newpath]);
        console.log(chalk.yellow('compiled-js ' + filepath + ' to ' + newpath));
    }
     //TODO:这里代码有点混乱，后期改进  合并 react 路由入口
    if (/\.(js|jsx)$/.test(filepath) && filepath.indexOf('/src/pages/') > 0 && filepath.indexOf('/config/route.js') > -1) {
        //监听客户端路由文件  且不是路由入口文件
        //, { stdio: 'inherit' } 此处不必重复输出
        spawnSync.sync('npm', ['run', 'chai-routes'], {
            stdio: 'inherit'
        });

        console.log(chalk.yellow('chai-routes compiled ' + filepath));
    }
    
    if (/\.(ejs|tpl|html)$/.test(ext)) {
        try {
            //非js文件如template文件只负责到指定文件夹即可
            fs.copyFileSync(filepath, newpath);
            console.log(chalk.yellow('copyed ' + filepath + ' to ' + newpath));
        } catch (error) {
            console.log(chalk.yellow('copye ' + filepath + ' error! fs.copyFileSync需要8.5+ 请查看Node版本是否正确;'));
            console.log(error);
            process.exit(1);
        }
    }
    if (/\.(scss|less|css)$/.test(ext)) {
        console.log(chalk.yellow('edited ' + filepath));
    }

    process.env.BABEL_ENV = 'development';
}

module.exports ={
    timeCompileWatcher:compileWatcher,
    lazyCompileWatcher:throttle
}