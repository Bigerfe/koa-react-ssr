"use strict";

var _reactSsr = _interopRequireDefault(require("../middlewares/react-ssr"));

var _koa = _interopRequireDefault(require("koa2"));

var _koaStatic = _interopRequireDefault(require("koa-static"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//web 服务启动入口对象
global.isProd = function () {
  return process.env.NODE_ENV === 'production';
};

const app = new _koa.default(); //设置可访问的静态资源

app.use((0, _koaStatic.default)('./dist/static')); //ssr 中间件

app.use(_reactSsr.default); //启动服务

app.listen(9001);
console.log('node server is start .9001', 'env is ', global.isProd() ? 'prod' : 'dev');