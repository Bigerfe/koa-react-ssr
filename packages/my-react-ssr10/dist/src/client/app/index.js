"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _index = _interopRequireDefault(require("../router/index"));

var _routeConfig = _interopRequireDefault(require("../router/route-config"));

var _reactRouterDom = require("react-router-dom");

var _provider = _interopRequireDefault(require("./provider"));

var _matchComponent = _interopRequireDefault(require("../../share/match-component"));

var _proConfig = _interopRequireDefault(require("../../share/pro-config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//client/app/index.js
//浏览器端页面结构渲染入口
function clientRender() {
  let data = JSON.parse(document.getElementById('ssrTextInitData').value); //渲染index 组件1

  _reactDom.default.hydrate(_react.default.createElement(_reactRouterDom.BrowserRouter, null, _react.default.createElement(_provider.default, {
    initialData: data
  }, _react.default.createElement(_index.default, {
    routeList: _routeConfig.default
  }))), document.getElementById('root'));
} //组件渲染逻辑


function render() {
  const Component = (0, _matchComponent.default)({
    path: document.location.pathname
  }, _routeConfig.default);

  if (Component[_proConfig.default.asyncComponentKey]) {
    Component().props.load().then(res => {
      //异步组件加载完成后再渲染页面
      clientRender();
    });
  } else {
    //正常渲染
    clientRender();
  }
}

render(); //开发环境才会开启

if (module.hot) {
  module.hot.accept();
}