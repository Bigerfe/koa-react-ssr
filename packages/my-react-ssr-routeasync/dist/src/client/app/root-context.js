"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// /src/client/app/root-context.js
//自定义 context 对象
//默认为一个空对象，这代码几乎不需要后期维护
const RootContext = _react.default.createContext({});

var _default = RootContext;
exports.default = _default;
