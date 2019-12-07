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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function App() {
  return _react.default.createElement(_layout.default, null, _react.default.createElement(_reactRouterDom.Switch, null, _routeConfig.default.map(item => {
    return _react.default.createElement(_reactRouterDom.Route, _extends({
      key: item.path
    }, item));
  })));
}

var _default = App;
exports.default = _default;