"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _layout = _interopRequireDefault(require("../app/layout"));

var _routeConfig = _interopRequireDefault(require("./route-config"));

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// src/client/router/indxex.js
//路由配置文件
function App() {
  return _react.default.createElement(_layout.default, null, _react.default.createElement(_reactRouterDom.Switch, null, _routeConfig.default.map(item => {
    return _react.default.createElement(_reactRouterDom.Route, {
      key: item.path,
      path: item.path,
      exact: true,
      component: item.component
    });
  })));
}

var _default = App;
exports.default = _default;