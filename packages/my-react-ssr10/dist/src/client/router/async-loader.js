"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _asyncBundle = _interopRequireDefault(require("./async-bundle"));

var _proConfig = _interopRequireDefault(require("../../share/pro-config"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//异步加载组件的高阶函数
function AsyncLoader(loader) {
  function asyncFn() {
    return _react.default.createElement(_asyncBundle.default, {
      load: loader
    }, Comp => _react.default.createElement(Comp, null));
  } //标记为异步组件


  asyncFn[_proConfig.default.asyncComponentKey] = true;
  return asyncFn;
}

var _default = AsyncLoader;
exports.default = _default;