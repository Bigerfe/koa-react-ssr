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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//组件
class Index extends _react.default.Component {
  constructor(props, context) {
    super(props, context); //数据通过 context 传递到组件里

    this.state = {
      page: context.page || {},
      fetchData: context.fetchData
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
        let {
          tdk
        } = this.state.page;

        if (tdk) {
          document.title = tdk.title;
        }
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
    }, _react.default.createElement(_Title.default, null), _react.default.createElement("p", {
      className: "img"
    }), data && data.map((item, index) => {
      return _react.default.createElement("div", {
        className: "item",
        key: index
      }, _react.default.createElement("h3", null, item.title), _react.default.createElement("p", null, item.desc));
    }), !data && _react.default.createElement("div", null, "\u6682\u65E0\u6570\u636E"));
  }

}

_defineProperty(Index, "contextType", _rootContext.default);

var _default = Index;
exports.default = _default;
