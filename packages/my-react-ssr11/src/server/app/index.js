//web 服务启动入口对象

import reactSsr from '../middlewares/react-ssr';
import Koa from 'koa2';
import koaStatic from 'koa-static';
import path from 'path';
import proConfig from '../../share/pro-config';

global.isProd = function () {
    return process.env.NODE_ENV === 'production';
}

const app = new Koa();

//设置可访问的静态资源
app.use(koaStatic('./dist/static'));


//ssr 中间件
app.use(reactSsr);

const port = process.env.PROT || proConfig.nodeServerPort;

//启动服务
app.listen(port);

console.log( '\n port is ',port, ' , node server is ready', ',current env is ', global.isProd() ? 'prod' : 'dev');