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
    this.state = {
      text: '123'
    };
  }

  render() {
    return _react.default.createElement("div", {
      className: "article-list"
    }, "\u6587\u7AE0\u5217\u8868\u9875", _react.default.createElement("input", {
      type: "text",
      value: this.state.text,
      onChange: e => {
        this.setState({
          text: e.target.value
        });
      }
    }));
  }

}

exports.default = Index;
