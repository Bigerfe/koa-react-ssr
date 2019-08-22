const path = require('path');

//开发环境中
const devClientAppPort=8809;

module.exports = {
    devStaticResourceHost: process.env.LocalIP ? `http://${process.env.LocalIP}:${devClientAppPort}/` :`http://localhost:${devClientAppPort}/`,
    devWdsPort: devClientAppPort, //单页应用访问入口 端口 
    appClientSrc: path.resolve(__dirname, '../src'),//fe code
    appServerSrc: path.resolve(__dirname, '../server'),//node server code
    appClientRouter: path.resolve(__dirname, '../src/routes'),
    appClientPages: path.resolve(__dirname, '../src/page'),
    routeIndexFolderName: 'index' //路由首页的文件夹声明 /page/index 首页路由会排在入口 list 的第一个位置
}