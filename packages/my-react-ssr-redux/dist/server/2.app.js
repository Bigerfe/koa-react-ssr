exports.ids = [2];
exports.modules = {

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js!./src/client/pages/list/list.scss":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/postcss-loader/src!./node_modules/sass-loader/dist/cjs.js!./src/client/pages/list/list.scss ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".list-page-box {\\n  font-size: 14px;\\n  text-align: left;\\n  padding: 10px; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/client/pages/list/list.scss?./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/postcss-loader/src!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./src/client/common/components/iso-connect/index.js":
/*!***********************************************************!*\
  !*** ./src/client/common/components/iso-connect/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_container_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../page-container/index */ \"./src/client/common/components/page-container/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-style-loader/withStyles */ \"isomorphic-style-loader/withStyles\");\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (({\n  css,\n  mapStateToProps,\n  mapDispatchToProps\n}, ActiveComponet) => {\n  return isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_2___default()(css)(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, mapDispatchToProps)(Object(_page_container_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(ActiveComponet)));\n});\n\n//# sourceURL=webpack:///./src/client/common/components/iso-connect/index.js?");

/***/ }),

/***/ "./src/client/common/components/page-container/index.js":
/*!**************************************************************!*\
  !*** ./src/client/common/components/page-container/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n//高阶组件 用于提取重复逻辑\n\nlet _this = null;\n\nconst popStateCallback = () => {\n  // 使用popStateFn保存函数防止addEventListener重复注册\n  if (_this && _this.getInitialProps) {\n    console.log('popStateFn');\n\n    _this.getInitialProps();\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SourceComponent => {\n  return class HoComponent extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n    constructor(props, context) {\n      super(props);\n      console.log('props', props);\n      this.state = {\n        initialData: {},\n        canClientFetch: false //浏览器端是否需要请求数据\n\n      };\n    } //用于服务端调用\n\n\n    static async getInitialProps(ctx) {\n      return SourceComponent.getInitialProps ? await SourceComponent.getInitialProps(ctx) : {};\n    } //用于封装处理\n\n\n    async getInitialProps() {\n      // ssr首次进入页面以及csr/ssr切换路由时才调用组件的getInitialProps方法\n      const props = this.props;\n      const store = window.__STORE__; //从全局得到 store \n      //兼容不使用 redux 的页面\n\n      const res = props.getInitialData ? await props.getInitialData(store.dispatch) : SourceComponent.getInitialProps ? await SourceComponent.getInitialProps() : {}; // this.setState({\n      //     initialData: res,\n      //     canClientFetch: true\n      // });\n\n      let {\n        tdk\n      } = res.page;\n\n      if (tdk) {\n        document.title = tdk.title;\n      }\n    }\n\n    async componentDidMount() {\n      _this = this; // 修正_this指向，保证_this指向当前渲染的页面组件\n      //注册事件，用于在页面回退的时候触发\n\n      window.addEventListener('popstate', popStateCallback);\n      const canClientFetch = this.props.history && this.props.history.action === 'PUSH'; //路由跳转的时候可以异步请求数据\n\n      console.log('canClientFetch', canClientFetch);\n\n      if (canClientFetch) {\n        await this.getInitialProps();\n      }\n    }\n\n    render() {\n      // 只有在首次进入页面需要将window.__INITIAL_DATA__作为props，路由切换时不需要\n      console.log('com render');\n      const props = {\n        initialData: {},\n        ...this.props\n      }; //客户端渲染\n\n      if (this.state.canClientFetch) {\n        //需要异步请求数据\n        props.initialData = this.state.initialData || {};\n      } else {\n        props.initialData = this.props.initialData;\n      }\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SourceComponent, props);\n    }\n\n  };\n});\n\n//# sourceURL=webpack:///./src/client/common/components/page-container/index.js?");

/***/ }),

/***/ "./src/client/pages/list/index.js":
/*!****************************************!*\
  !*** ./src/client/pages/list/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _list_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list.scss */ \"./src/client/pages/list/list.scss\");\n/* harmony import */ var _list_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_list_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _redux_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redux/index */ \"./src/client/pages/list/redux/index.js\");\n/* harmony import */ var _common_components_iso_connect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/components/iso-connect */ \"./src/client/common/components/iso-connect/index.js\");\n//src/client/pages/list/index.js\n//index 组件\n\n\n\n\n //组件\n\nclass Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n  }\n\n  static async getInitialProps({\n    store\n  }) {\n    return store.dispatch(Object(_redux_index__WEBPACK_IMPORTED_MODULE_3__[\"getInitialData\"])());\n  }\n\n  render() {\n    //渲染数据\n    const {\n      fetchData,\n      page\n    } = this.props.initialData;\n    const {\n      code,\n      data\n    } = fetchData || {};\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"list-page-box\"\n    }, data && data.map((item, index) => {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        key: index\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, item.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, item.desc));\n    }), !data && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"\\u6682\\u65E0\\u6570\\u636E\"));\n  }\n\n}\n\nconst mapStateToProps = state => ({\n  initialData: state.listPage\n});\n\nconst mapDispatchToProps = dispatch => ({\n  getInitialData() {\n    console.log('dispath fetch data');\n    return dispatch(Object(_redux_index__WEBPACK_IMPORTED_MODULE_3__[\"getInitialData\"])());\n  }\n\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_common_components_iso_connect__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n  css: (_list_scss__WEBPACK_IMPORTED_MODULE_2___default()),\n  mapStateToProps,\n  mapDispatchToProps\n}, Index));\n\n//# sourceURL=webpack:///./src/client/pages/list/index.js?");

/***/ }),

/***/ "./src/client/pages/list/list.scss":
/*!*****************************************!*\
  !*** ./src/client/pages/list/list.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../../node_modules/postcss-loader/src!../../../../node_modules/sass-loader/dist/cjs.js!./list.scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js!./src/client/pages/list/list.scss\");\n    var insertCss = __webpack_require__(/*! ../../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/client/pages/list/list.scss?");

/***/ })

};;