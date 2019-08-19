const path = require('path');

module.exports = {
    jsCdnHost: '/',
    cssCdnHost: 'http://c1',
    appPort: '8809', //默认前端应用端口号
    devServerPort:'8808',//开发环境 node server 的端口
    isDev: process.env.NODE_ENV !== 'production',
    appSrc: path.resolve(__dirname, '../src'),
    appServerSrc: path.resolve(__dirname, '../server'),
    appClientRouter: path.resolve(__dirname, '../src/routes'),
    appClientPages: path.resolve(__dirname, '../src/page'),
    routeIndexFolderName: 'index' //路由首页的文件夹声明 /page/index 
}