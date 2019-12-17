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
    return _react.default.createElement("div", {
      className: "big-title"
    }, "\u6807\u9898");
  }

}

exports.default = Index;
