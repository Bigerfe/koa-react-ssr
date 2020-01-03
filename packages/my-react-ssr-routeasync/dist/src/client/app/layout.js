"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _root = require("react-hot-loader/root");

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Index extends _react.default.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return _react.default.createElement("div", null, _react.default.createElement(_reactRouterDom.NavLink, {
      to: "/index",
      style: {
        marginLeft: "10px"
      }
    }, "\u9996\u9875"), _react.default.createElement(_reactRouterDom.NavLink, {
      style: {
        marginLeft: "10px"
      },
      onClick: this.click,
      to: "/article"
    }, "\u5217\u8868\u9875"), _react.default.createElement(_reactRouterDom.NavLink, {
      style: {
        marginLeft: "10px"
      },
      onClick: this.click,
      to: "/search"
    }, "\u641C\u7D22\u9875"), this.props.children);
  }

} //带入路由信息


var _default = (0, _root.hot)(Index);

exports.default = _default;
