"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactHelmet = require("react-helmet");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AticleList extends _react.default.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return _react.default.createElement("div", {
      className: "article-list"
    }, _react.default.createElement(_reactHelmet.Helmet, null, _react.default.createElement("title", null, "\u5217\u8868\u9875"), _react.default.createElement("meta", {
      name: "description",
      content: "\u7EC8\u8EAB\u5B66\u4E60"
    }), _react.default.createElement("meta", {
      name: "keywords",
      content: "\u524D\u7AEF\u6280\u672F\u6C5F\u6E56"
    })), "\u6587\u7AE0\u5217\u88681");
  }

}

exports.default = AticleList;
