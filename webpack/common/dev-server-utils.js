
//react-dev-utils有很多功能是我们不需要的;我们实现一个简单可控,易修改的；

const chalk = require('chalk');
const formatMessages = require('./format-messages');
/**
 * 我们需要监听webpack一些编译阶段的输出
 * @param {*} webpack 
 * @param {配置文件} config 
 */
function createCompiler(webpack, config) {
    let compiler;
    try {
        compiler = webpack(config);
    } catch (error) {
        console.log(chalk.red('Failed to compile. \n'));
        console.log(error.message || error);
        process.exit(1);
    }
    //webpack编译完成后会触发done事件,我们在此获取编译过程中的warning或error并输出
    compiler.hooks.done.tap('ok', status => {
        var res = formatMessages(status.toJson({}, true));
        if (res.errors.length) {
            console.log('webpack build result:');
            console.log(chalk.red('Failed to compile.\n'));
            //比如parse失败 通常会返回两个同样的错误 一个parse fail一个module build
            //fail 但是内容是一样的；我们只取第一个即可;
            res.errors.length = 1;
            console.log('webpack build result:');
            console.log(res.errors.join('\n\n'));
        } else if (res.warnings.length) {
            console.log('webpack build result:');
            console.log(chalk.yellow('Compiled with warnings.\n'));
            console.log(res.warnings.join('\n\n'));
        }else{
            console.log('webpack build result:');
            console.log(res);
        }

    })
    return compiler;

}


module.exports = {
    createCompiler
}