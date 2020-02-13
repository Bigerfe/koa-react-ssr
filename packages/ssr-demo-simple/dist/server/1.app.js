exports.ids = [1];
exports.modules = {

/***/ "./src/client/common/components/page-container/index.js":
/*!**************************************************************!*\
  !*** ./src/client/common/components/page-container/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n//高阶组件 用于提取重复逻辑\n\nlet _this = null;\nlet _isPop = false; //是否触发过popState\n\nlet _isMount = false; //组件是否挂载完成\n\nconst popStateCallback = () => {\n  // 使用 popStateCallback 保存函数防止 addEventListener 重复注册\n  if (_this && _this.getInitialProps) {\n    console.log('popStateFn');\n    _isPop = true;\n\n    if (_isMount) {\n      //只有当前组件挂载后才能执行数据预取，否则会报错\n      _this.getInitialProps();\n    }\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SourceComponent => {\n  return class HoComponent extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n    constructor(props) {\n      super(props);\n      this.state = {\n        initialData: {},\n        canClientFetch: false //浏览器端是否需要请求数据\n\n      };\n    } //用于服务端调用\n\n\n    static async getInitialProps(ctx) {\n      return SourceComponent.getInitialProps ? await SourceComponent.getInitialProps(ctx) : {};\n    } //用于封装处理\n\n\n    async getInitialProps() {\n      // ssr首次进入页面以及csr/ssr切换路由时才调用组件的getInitialProps方法\n      const {\n        match,\n        location\n      } = this.props;\n      const res = SourceComponent.getInitialProps ? await SourceComponent.getInitialProps({\n        match,\n        location\n      }) : {};\n      this.setState({\n        initialData: res,\n        canClientFetch: true\n      });\n      console.log('getInitialProps');\n      let {\n        tdk\n      } = res.page;\n\n      if (tdk) {\n        document.title = tdk.title;\n      }\n    }\n\n    async componentDidMount() {\n      //注册事件，用于在页面回退和前进的时候触发\n      _isMount = true; //组件挂载完成\n\n      if (window.__IS__SSR__) {\n        //只有当启用 ssr 时\n        _this = this; // 修正_this指向，保证_this指向当前渲染的页面组件\n        //注册事件\n\n        window.addEventListener('popstate', popStateCallback);\n\n        if (_isPop) {\n          //如果前进或者后退 则需要异步获取数据\n          this.getInitialProps();\n        }\n      }\n\n      const canClientFetch = this.props.history && this.props.history.action === 'PUSH'; //路由跳转的时候可以异步请求数据\n\n      console.log('canClientFetch', canClientFetch);\n\n      if (canClientFetch || !window.__IS__SSR__) {\n        await this.getInitialProps();\n      }\n    }\n\n    componentWillUnmount() {\n      console.log('unmount');\n      _isPop = false; //重置为未触发\n\n      _isMount = false; //重置为未挂载\n    }\n\n    render() {\n      // 只有在首次进入页面需要将window.__INITIAL_DATA__作为props，路由切换时不需要\n      const props = {\n        initialData: {},\n        ...this.props\n      };\n\n      if (true) {\n        //服务端渲染\n        props.initialData = this.props.staticContext.initialData || {};\n      } else {}\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SourceComponent, props);\n    }\n\n  };\n});\n\n//# sourceURL=webpack:///./src/client/common/components/page-container/index.js?");

/***/ }),

/***/ "./src/client/common/fetch/fetch-config.js":
/*!*************************************************!*\
  !*** ./src/client/common/fetch/fetch-config.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  apiHost: 'http://mockssr.bigerfe.com' //接口地址\n\n});\n\n//# sourceURL=webpack:///./src/client/common/fetch/fetch-config.js?");

/***/ }),

/***/ "./src/client/common/fetch/get-detail.js":
/*!***********************************************!*\
  !*** ./src/client/common/fetch/get-detail.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fetch_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch-config */ \"./src/client/common/fetch/fetch-config.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (id => {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${_fetch_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].apiHost}/detail/${id}`).then(function (response) {\n    // handle success\n    return response.data;\n  }).catch(function (error) {\n    // handle error\n    console.log(error);\n  });\n});\n\n//# sourceURL=webpack:///./src/client/common/fetch/get-detail.js?");

/***/ }),

/***/ "./src/client/pages/detail/index.js":
/*!******************************************!*\
  !*** ./src/client/pages/detail/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _common_fetch_get_detail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/fetch/get-detail */ \"./src/client/common/fetch/get-detail.js\");\n/* harmony import */ var _common_components_page_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/components/page-container */ \"./src/client/common/components/page-container/index.js\");\n//src/client/pages/detail/index.js\n//小册详情 组件\n\n\n\n\n\n//组件\nclass Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n  }\n\n  static async getInitialProps(ctx) {\n    let res = await Object(_common_fetch_get_detail__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ctx.match.params.id);\n    return {\n      fetchData: res.data || {},\n      page: {\n        tdk: {\n          title: '小册详情 - koa-react-ssr demo',\n          keywords: 'koa-react-ssr',\n          description: 'koa-react-ssr'\n        }\n      }\n    };\n  }\n\n  render() {\n    //渲染数据\n    const {\n      fetchData = {}\n    } = this.props.initialData || {};\n    const {\n      html\n    } = fetchData || null;\n    return html ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"detail-box\",\n      dangerouslySetInnerHTML: {\n        __html: html\n      }\n    }) : null;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_common_components_page_container__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Index));\n\n//# sourceURL=webpack:///./src/client/pages/detail/index.js?");

/***/ })

};;