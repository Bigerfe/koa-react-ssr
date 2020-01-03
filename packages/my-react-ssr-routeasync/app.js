//web 服务启动入口文件 放在根目录方便以后的部署

global.isProd=function () {
    return process.env.NODE_ENV==='production';
}


const app = require('./dist/src/server/app/index.js').default;

//启动服务
app.listen(9001);

console.log('node server is start .9001','env is ',global.isProd()?'prod':'dev');