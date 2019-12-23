"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _index = _interopRequireDefault(require("./index.scss"));

var _withStyles = _interopRequireDefault(require("isomorphic-style-loader/withStyles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Index extends _react.default.Component {
  constructor(props) {
    super(props);
    console.log('title com');
  }

  render() {
    return _react.default.createElement("div", {
      className: "big-title"
    }, "\u6807\u9898");
  }

}

var _default = (0, _withStyles.default)(_index.default)(Index);

exports.default = _default;