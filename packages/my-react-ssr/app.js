//web 服务启动入口文件 放在根目录方便以后的部署

const reactSsr  = require('./dist/src/server/middlewares/react-ssr').default;
const Koa = require('koa2');
const koaStatic =require('koa-static');
const path = require('path');

const app = new Koa();


//设置可访问的静态资源
app.use(koaStatic(
        path.join(__dirname, './dist/static')
));


//ssr 中间件
app.use(reactSsr);

//启动服务
app.listen(9001);

console.log('server is start .9001');