var opn = require('opn');
/**
 * 用opn库自动打开浏览器
 * @param {url地址} url 
 */
function openBrowser(url) {
    //默认谷歌 有需要请自行修改
    //opn('http://sindresorhus.com', {app: 'firefox'});
    opn(url).catch(err => { console.log(err); });
}
module.exports = openBrowser;