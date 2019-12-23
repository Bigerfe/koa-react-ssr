"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _rootContext = _interopRequireDefault(require("../../app/root-context"));

var _data = _interopRequireDefault(require("./data"));

var _Title = _interopRequireDefault(require("../../common/components/Title"));

var _reactHelmet = require("react-helmet");

var _withStyles = _interopRequireDefault(require("isomorphic-style-loader/withStyles"));

var _index = _interopRequireDefault(require("./index.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

console.log('css', _index.default); //组件

class Index extends _react.default.Component {
  constructor(props, context) {
    super(props, context);
    console.log('index com'); //数据通过 context 传递到组件里

    let initalData = context.initialData;
    this.state = {
      page: initalData.page || {},
      fetchData: initalData.fetchData
    };
  } //得到 context 对象


  static async getInitialProps() {
    console.log('fetch data'); //模拟数据请求方法

    const fetchData = () => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve({
            code: 0,
            data: _data.default
          });
        }, 100);
      });
    };

    let res = await fetchData();
    return {
      fetchData: res,
      page: {
        tdk: {
          title: '首页',
          keywords: '前端技术江湖',
          description: '前端技术江湖'
        }
      }
    };
  }

  componentDidMount() {
    if (!this.state.fetchData) {
      //如果没有数据，则进行数据请求
      Index.getInitialProps().then(res => {
        this.setState({
          fetchData: res.fetchData,
          page: res.page
        });
      });
    }
  }

  render() {
    //渲染数据
    const {
      code,
      data
    } = this.state.fetchData || {};
    return _react.default.createElement("div", {
      className: "index-content"
    }, _react.default.createElement(_reactHelmet.Helmet, null, _react.default.createElement("title", null, "\u524D\u7AEF\u6280\u672F\u6C5F\u6E56"), _react.default.createElement("meta", {
      name: "description",
      content: "\u524D\u7AEF\u6280\u672F\u6C5F\u6E56,\u7EC8\u8EAB\u5B66\u4E60"
    }), _react.default.createElement("meta", {
      name: "keywords",
      content: "\u524D\u7AEF\u6280\u672F\u6C5F\u6E56"
    })), _react.default.createElement(_Title.default, null), _react.default.createElement("p", {
      className: "contentimg"
    }), data && data.map((item, index) => {
      return _react.default.createElement("div", {
        className: "item",
        key: index
      }, _react.default.createElement("h3", null, item.title), _react.default.createElement("p", null, item.desc));
    }), !data && _react.default.createElement("div", null, "\u6682\u65E0\u6570\u636E"));
  }

} //export default Index;


_defineProperty(Index, "contextType", _rootContext.default);

var _default = (0, _withStyles.default)(_index.default)(Index);

exports.default = _default;