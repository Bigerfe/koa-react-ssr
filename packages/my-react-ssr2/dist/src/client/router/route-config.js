"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../pages/index"));

var _articleList = _interopRequireDefault(require("../pages/article-list"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//路由配置文件
var _default = [{
  path: '/',
  component: _index.default
}, {
  path: '/index',
  component: _index.default
}, {
  path: '/article',
  component: _articleList.default
}];
exports.default = _default;