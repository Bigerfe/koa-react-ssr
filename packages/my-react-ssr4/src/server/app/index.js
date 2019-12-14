//web 服务启动入口对象

import reactSsr from '../middlewares/react-ssr';
import Koa from 'koa2';
import koaStatic from 'koa-static';
import path from 'path';

const app = new Koa();

console.log('121212121212');
console.log(path.resolve(__dirname, './dist/static'));

//设置可访问的静态资源
app.use(koaStatic('./dist/static'));

console.log('cccdddfffffff');

//ssr 中间件
app.use(reactSsr);


//启动服务

app.listen(9001);


 
console.log('server is start .9001');