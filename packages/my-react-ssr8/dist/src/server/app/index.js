"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactSsr = _interopRequireDefault(require("../middlewares/react-ssr"));

var _koa = _interopRequireDefault(require("koa2"));

var _koaStatic = _interopRequireDefault(require("koa-static"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//web 服务启动入口对象
const app = new _koa.default(); //设置可访问的静态资源

app.use((0, _koaStatic.default)('./dist/static')); //ssr 中间件

app.use(_reactSsr.default);
var _default = app;
exports.default = _default;