'use strict';
const spawn = require('cross-spawn');
const chalk = require('chalk');



console.log(chalk.green('Compiling server '));
//server端template下的模板文件需要复制过去--copy-files  缺点-需要全局安装 babel 
//spawn('babel', ['server', '--out-dir', 'build/server', '--copy-files'], { stdio: 'inherit' });
//spawn('babel', ['client', '--out-dir', 'build/server/client'], { stdio: 'inherit' });
//使用这个方式 命令配置在了 scripts 里

process.env.BABEL_ENV='node';

//浏览器的文件生成一份在服务端运行
spawn('npm', ['run', 'babel-csfile'], { stdio: 'inherit' });

// //前端路由和 node api 入口合并代码生成 
spawn('npm', ['run', 'babel'], { stdio: 'inherit' });

spawn('npm', ['run', 'chai-routes'], { stdio: 'inherit' });



