exports.ids = [0];
exports.modules = {

/***/ "./src/client/common/components/page-container/index.js":
/*!**************************************************************!*\
  !*** ./src/client/common/components/page-container/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n//高阶组件 用于提取重复逻辑\n\nlet _this = null;\n\nconst popStateCallback = () => {\n  // 使用popStateFn保存函数防止addEventListener重复注册\n  if (_this && _this.getInitialProps) {\n    console.log('popStateFn');\n\n    _this.getInitialProps();\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SourceComponent => {\n  return class HoComponent extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n    constructor(props) {\n      super(props);\n      this.state = {\n        initialData: {},\n        canClientFetch: false //浏览器端是否需要请求数据\n\n      };\n    } //用于服务端调用\n\n\n    static async getInitialProps(ctx) {\n      return SourceComponent.getInitialProps ? await SourceComponent.getInitialProps(ctx) : {};\n    } //用于封装处理\n\n\n    async getInitialProps() {\n      // ssr首次进入页面以及csr/ssr切换路由时才调用组件的getInitialProps方法\n      const {\n        match,\n        location\n      } = this.props;\n      const res = SourceComponent.getInitialProps ? await SourceComponent.getInitialProps({\n        match,\n        location\n      }) : {};\n      this.setState({\n        initialData: res,\n        canClientFetch: true\n      });\n      console.log('getInitialProps');\n      let {\n        tdk\n      } = res.page;\n\n      if (tdk) {\n        document.title = tdk.title;\n      }\n    }\n\n    async componentDidMount() {\n      _this = this; // 修正_this指向，保证_this指向当前渲染的页面组件\n      //注册事件，用于在页面回退的时候触发\n\n      window.__IS__SSR && window.addEventListener('popstate', popStateCallback);\n      const canClientFetch = this.props.history && this.props.history.action === 'PUSH'; //路由跳转的时候可以异步请求数据\n\n      console.log('canClientFetch', canClientFetch);\n\n      if (canClientFetch || !window.__IS__SSR) {\n        await this.getInitialProps();\n      }\n    }\n\n    render() {\n      // 只有在首次进入页面需要将window.__INITIAL_DATA__作为props，路由切换时不需要\n      const props = {\n        initialData: {},\n        ...this.props\n      };\n\n      if (true) {\n        //服务端渲染\n        props.initialData = this.props.staticContext.initialData || {};\n      } else {}\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SourceComponent, props);\n    }\n\n  };\n});\n\n//# sourceURL=webpack:///./src/client/common/components/page-container/index.js?");

/***/ }),

/***/ "./src/client/pages/index/index.js":
/*!*****************************************!*\
  !*** ./src/client/pages/index/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_img_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/img.jpg */ \"./src/client/public/img.jpg\");\n/* harmony import */ var _common_components_page_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/components/page-container */ \"./src/client/common/components/page-container/index.js\");\n\n\n\n\nconst dom =  true ? {} : undefined;\n\nfunction Index(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"page-index-box\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"\\u9996\\u9875\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: _public_img_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  }));\n}\n\nIndex.getInitialProps = async ctx => {\n  console.log('fetch data index'); //模拟数据请求方法\n  //...\n\n  return {\n    page: {\n      tdk: {\n        title: '首页 - koa-react-ssr',\n        keywords: '关键词 - koa-react-ssr',\n        description: '描述'\n      }\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_common_components_page_container__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Index));\n\n//# sourceURL=webpack:///./src/client/pages/index/index.js?");

/***/ }),

/***/ "./src/client/public/img.jpg":
/*!***********************************!*\
  !*** ./src/client/public/img.jpg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"http://localhost:9002/img/img.jpg\");\n\n//# sourceURL=webpack:///./src/client/public/img.jpg?");

/***/ })

};;