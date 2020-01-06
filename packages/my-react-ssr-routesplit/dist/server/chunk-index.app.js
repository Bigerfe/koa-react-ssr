exports.ids = ["chunk-index"];
exports.modules = {

/***/ "./src/client/pages/index/index.js":
/*!*****************************************!*\
  !*** ./src/client/pages/index/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_img_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/img.jpg */ \"./src/client/public/img.jpg\");\n\n\n\nclass Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n    let initialData = null; //初始化数据\n\n    if (true) {\n      //如果是当然是服务端执行\n      initialData = props.staticContext.initialData || {};\n    } else {}\n\n    this.state = {\n      page: initialData.page,\n      fetchData: initialData.fetchData\n    };\n  }\n\n  static async getInitialProps() {\n    console.log('fetch data index'); //模拟数据请求方法\n    //...\n\n    return {\n      page: {\n        tdk: {\n          title: '首页 - react ssr',\n          keywords: '前端技术江湖',\n          description: '关键词'\n        }\n      }\n    };\n  }\n\n  componentDidMount() {\n    if (!this.state.fetchData) {\n      //如果没有数据，则进行数据请求\n      Index.getInitialProps().then(res => {\n        this.setState({\n          fetchData: res.fetchData || [],\n          page: res.page\n        });\n        document.title = res.page.tdk.title;\n      });\n    }\n\n    if (this.state.page && this.state.page.tdk) {\n      document.title = this.state.page.tdk.title;\n    }\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"page-index-box\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"\\u9996\\u9875\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      src: _public_img_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    }));\n  }\n\n}\n\n//# sourceURL=webpack:///./src/client/pages/index/index.js?");

/***/ }),

/***/ "./src/client/public/img.jpg":
/*!***********************************!*\
  !*** ./src/client/public/img.jpg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"/img/img.jpg\");\n\n//# sourceURL=webpack:///./src/client/public/img.jpg?");

/***/ })

};;