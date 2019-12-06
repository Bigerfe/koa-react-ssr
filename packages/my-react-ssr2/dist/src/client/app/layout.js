"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Index extends _react.default.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return _react.default.createElement("div", null, _react.default.createElement(_reactRouterDom.Link, {
      to: "/index"
    }, "\u9996\u9875"), "  ", _react.default.createElement(_reactRouterDom.Link, {
      to: "/article"
    }, "\u5217\u8868\u9875"), this.props.children);
  }

}

exports.default = Index;