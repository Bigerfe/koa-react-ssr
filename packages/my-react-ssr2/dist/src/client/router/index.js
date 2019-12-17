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

function Test(props) {
  return _react.default.createElement("div", null, "test");
}

function App() {
  return _react.default.createElement(_layout.default, null, _react.default.createElement(_reactRouterDom.Switch, null, _routeConfig.default.map(function (item) {
    return _react.default.createElement(_reactRouterDom.Route, _extends({
      exact: true,
      key: item.path
    }, item));
  }), _react.default.createElement(_reactRouterDom.Route, {
    path: "/test",
    component: Test
  })));
}

var _default = App;
exports.default = _default;
