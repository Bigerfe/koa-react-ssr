/**
 * node 服务实例文件
 * zjp
 * 18.7.16
 */


const convert = require('koa-convert');
const json = require('koa-json');
const BodyParser = require('koa-bodyparser');
const koaStatic = require('koa-static');
const path = require('path');
const setCookie = require('../middleware/set-cookie');
const baseRoute = require('../middleware/base-route');

const Koa = require('koa2');
const app = new Koa();

// const webpackConfig = require('../../webpack/webpack.config.dev-mid');//webpack 配置
// const webpack = require("webpack");
// const compiler = webpack(webpackConfig);




// complier.hooks('done',status=>{
//   console.log('webpack ok');
// });



app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms `);
});


app.use(convert(BodyParser()));
app.use(convert(json()));


app.use(koaStatic(
  path.join(__dirname, '../../dist')
));




// const myDev = koaWebpackDevMiddleware(complier,{
//   headers: { "X-Custom-Header": "yes" },
//   publicPath: webpackConfig.output.publicPath,
//   quiet: true,//项控制台打印所有内容
//   contentBase: path.resolve(__dirname,'../../dist'),
//   serverSideRender: true
// });

// app.use(myDev);

app.use(setCookie);

app.use(baseRoute);

// app.use((ctx, next) => {
//   console.log('=========');
//   console.log('======', ctx.headers.origin);
//   ctx.set('Access-Control-Allow-Origin', ctx.headers.origin);
//   ctx.set('Access-Control-Allow-Credentials', 'true');

//   ctx.set("Access-Control-Max-Age", 864000);
//   // 设置所允许的HTTP请求方法
//   ctx.set("Access-Control-Allow-Methods", "OPTIONS, GET, POST");
//   // 字段是必需的。它也是一个逗号分隔的字符串，表明服务器支持的所有头信息字段.
//   ctx.set("Access-Control-Allow-Headers", "x-requested-with, accept, origin, content-type");
//   //}

//   return next();
// })



module.exports = app;
