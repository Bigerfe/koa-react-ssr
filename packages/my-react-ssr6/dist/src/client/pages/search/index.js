"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Index extends _react.default.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "textChangeHandler", e => {
      console.log(e.target.value);
      this.setState({
        text: e.target.value
      });
    });

    this.state = {
      text: 'abc'
    };
  }

  static async getInitialProps() {
    return {
      page: {
        tdk: {
          title: '搜索页',
          keywords: '关键词',
          description: '描述'
        }
      }
    };
  }

  componentDidMount() {}

  render() {
    return _react.default.createElement("div", {
      className: "search-page"
    }, _react.default.createElement("h2", null, "\u641C\u7D22\u9875\u97621"), _react.default.createElement("input", {
      type: "text",
      value: this.state.text,
      onChange: this.textChangeHandler
    }));
  }

}

exports.default = Index;
