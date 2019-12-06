"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//src/client/pages/index/index.js
//index 组件
//组件
class Index extends _react.default.Component {
  constructor(props) {
    super(props);
  }

  handlerClick() {
    alert('一起来玩 react 服务端渲染');
  }

  render() {
    const str = 'click here!1122';
    return _react.default.createElement("div", {
      onClick: this.handlerClick
    }, str);
  }

}

exports.default = Index;