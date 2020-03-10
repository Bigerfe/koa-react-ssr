/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/app/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/app/layout.js":
/*!**********************************!*\
  !*** ./src/client/app/layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\n/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nclass Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"layout-box\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"koa+react+ssr\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n      to: \"/index\",\n      style: {\n        marginLeft: \"10px\"\n      }\n    }, \"\\u9996\\u9875\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n      style: {\n        marginLeft: \"10px\"\n      },\n      to: \"/list\"\n    }, \"\\u5217\\u8868\\u9875\"), this.props.children);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_3__[\"hot\"])(Index));\n\n//# sourceURL=webpack:///./src/client/app/layout.js?");

/***/ }),

/***/ "./src/client/app/provider.js":
/*!************************************!*\
  !*** ./src/client/app/provider.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _root_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./root-context */ \"./src/client/app/root-context.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// /src/client/app/provider.js\n//自定义 provider 组件\n//实现数据的跨组件传输\n\n\nclass Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props, context) {\n    super(props);\n\n    _defineProperty(this, \"changeContext\", data => {});\n  }\n\n  componentDidMount() {}\n\n  render() {\n    //使用了 provider 可以让消费者订阅变化，从而重新渲染\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_root_context__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Provider, {\n      value: this.props.initialData || {}\n    }, this.props.children);\n  }\n\n}\n\n//# sourceURL=webpack:///./src/client/app/provider.js?");

/***/ }),

/***/ "./src/client/app/root-context.js":
/*!****************************************!*\
  !*** ./src/client/app/root-context.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n// /src/client/app/root-context.js\n//自定义 context 对象\n //默认为一个空对象，这代码几乎不需要后期维护\n\nconst RootContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});\n/* harmony default export */ __webpack_exports__[\"default\"] = (RootContext);\n\n//# sourceURL=webpack:///./src/client/app/root-context.js?");

/***/ }),

/***/ "./src/client/pages/index/index.js":
/*!*****************************************!*\
  !*** ./src/client/pages/index/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_img_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/img.jpg */ \"./src/client/public/img.jpg\");\n\n\n\nclass Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n    let initialData = null; //初始化数据\n\n    if (true) {\n      //如果是当然是服务端执行\n      initialData = props.staticContext.initialData || {};\n    } else {}\n\n    this.state = {\n      page: initialData.page,\n      fetchData: initialData.fetchData\n    };\n  }\n\n  static async getInitialProps() {\n    console.log('fetch data index'); //模拟数据请求方法\n    //...\n\n    return {\n      page: {\n        tdk: {\n          title: '首页 - react ssr',\n          keywords: '前端技术江湖',\n          description: '关键词'\n        }\n      }\n    };\n  }\n\n  componentDidMount() {\n    if (!this.state.fetchData) {\n      //如果没有数据，则进行数据请求\n      Index.getInitialProps().then(res => {\n        this.setState({\n          fetchData: res.fetchData || [],\n          page: res.page\n        });\n        document.title = res.page.tdk.title;\n      });\n    }\n\n    if (this.state.page && this.state.page.tdk) {\n      document.title = this.state.page.tdk.title;\n    }\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"page-index-box\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"\\u9996\\u9875\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      src: _public_img_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    }));\n  }\n\n}\n\n//# sourceURL=webpack:///./src/client/pages/index/index.js?");

/***/ }),

/***/ "./src/client/pages/list/data.js":
/*!***************************************!*\
  !*** ./src/client/pages/list/data.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst data = [{\n  \"title\": \"深入浅出TypeScript：从基础知识到类型编程\",\n  \"desc\": \"Vue3 源码及开发必备基础，从基础知识到类型工具设计，从理论到实战，手把手让你从零基础成为进阶使用者。\",\n  \"img\": \"https://user-gold-cdn.xitu.io/2019/11/8/16e4ab5d6aff406a?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1\"\n}, {\n  \"title\": \"SVG 动画开发实战手册\",\n  \"desc\": \"从0到1，学习SVG动画开发知识，快速高效完成SVG动画效果开发。\",\n  \"img\": \"https://user-gold-cdn.xitu.io/2019/9/26/16d6bda264ac27e4?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1\"\n}, {\n  \"title\": \"预售JavaScript 设计模式核⼼原理与应⽤实践\",\n  \"desc\": \"通俗易懂的编程“套路“学。带你深入看似高深实则接地气的设计模式原理，在实际场景中内化设计模式的”道“与”术“。学会驾驭代码，而非被其奴役。\",\n  \"img\": \"https://user-gold-cdn.xitu.io/2019/9/16/16d382e623923d91?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1\"\n}, {\n  \"title\": \"从入门到深入：IM聊天系统前端开发实践\",\n  \"desc\": \"IM聊天为案例，系统性讲解前端核心知识点\",\n  \"img\": \"https://user-gold-cdn.xitu.io/2019/5/27/16af958d3adcf362?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1\"\n}, {\n  \"title\": \"你不知道的 Chrome 调试技巧\",\n  \"desc\": \"熟练掌握 Chrome 调试技巧，直接提升工作效率。\",\n  \"img\": \"https://user-gold-cdn.xitu.io/2019/1/31/168a1fa41cd01af2?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1\"\n}, {\n  \"title\": \"WebGL 入门与实践\",\n  \"desc\": \"介绍 WebGL 与 CSS 3D 开发的点点滴滴，详细阐述 3D 数学库的实现原理与使用，演示 3D 数学库对于 WebGL 开发和普通网页开发的重要作用，助力每个前端开发者轻松掌握 3D 开发的关键技术。\",\n  \"img\": \"https://user-gold-cdn.xitu.io/2019/2/25/16922d6d22ff1458?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1\"\n}, {\n  \"title\": \"基于 ThreeJS 框架的魔方微信小游戏实践\",\n  \"desc\": \"从 0 到 1，一步步带你基于 ThreeJS 实现一个炫酷的魔方微信小游戏\",\n  \"img\": \"https://user-gold-cdn.xitu.io/2019/2/25/16922a9c5a3527fa?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1\"\n}, {\n  \"title\": \"前端面试之道\",\n  \"desc\": \"助你建立起完整的前端知识架构体系，探究知识的原理，深入了解大厂常考知识点\",\n  \"img\": \"https://user-gold-cdn.xitu.io/2018/12/25/167e14942f2dcf44?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1\"\n}, {\n  \"title\": \"Vue.js 组件精讲\",\n  \"desc\": \"iView 作者 3 年的 Vue.js 组件开源积累，Vue.js 组件知识深入剖析\",\n  \"img\": \"https://user-gold-cdn.xitu.io/2018/12/18/167c119a41e444d5?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1\"\n}, {\n  \"title\": \"React 实战：设计模式和最佳实践\",\n  \"desc\": \"深入了解 React 应用中的设计模式，总结业界验证的最佳实践，更进一步，了解React 未来新功能 Suspense 和 Hooks。\",\n  \"img\": \"https://user-gold-cdn.xitu.io/2018/12/4/16779ed4b21a9fa5?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1\"\n}, {\n  \"title\": \"Vue 项目构建与开发入门\",\n  \"desc\": \"从构建到开发，帮助 Vue 开发者提升项目构建与开发能力，基于 Vue CLI 3\",\n  \"img\": \"https://user-gold-cdn.xitu.io/2018/11/27/16754380a4c1a096?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1\"\n}, {\n  \"title\": \"Taro 多端开发实现原理与项目实战\",\n  \"desc\": \"剖析 Taro 多端开发框架的实现原理，并通过电商核心的项目实战，帮助开发者快速上手多端项目。\",\n  \"img\": \"https://user-gold-cdn.xitu.io/2018/11/12/16706202cc6428df?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1\"\n}, {\n  \"title\": \"前端性能优化原理与实践\",\n  \"desc\": \"毫秒必争！深入理解前端性能原理，将晦涩的知识转化为可爱的生产力，建立你自己的优化技能索引目录\",\n  \"img\": \"https://user-gold-cdn.xitu.io/2018/10/23/166a0387b91066b9?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1\"\n}, {\n  \"title\": \"微信小游戏开发入门：从 0 到 1 实现井字棋游戏\",\n  \"desc\": \"构建自己的第一个微信小游戏，让你的社交和游戏创意变为现实\",\n  \"img\": \"https://user-gold-cdn.xitu.io/2018/9/18/165eb6f3cb9eb04f?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1\"\n}, {\n  \"title\": \"基于 hapi 的 Node.js 小程序后端开发实践指南\",\n  \"desc\": \"基于 Node.js 搭建敏捷高效的 RESTful 接口服务，走上小程序开发的全栈之路\",\n  \"img\": \"https://user-gold-cdn.xitu.io/2018/9/11/165c7a188e490e48?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1\"\n}, {\n  \"title\": \"微信小程序开发入门：从 0 到 1 实现天气小程序\",\n  \"desc\": \"从基础到实战，从开发环境搭建到开发、调试、上线，打通小程序开发全流程\",\n  \"img\": \"https://user-gold-cdn.xitu.io/2018/8/29/16584f1faa1c4262?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1\"\n}, {\n  \"title\": \"React 组合式开发实践：打造企业管理系统五大核心模块\",\n  \"desc\": \"基于 React 的企业管理系统开发经验，带你学习如何抽象复杂业务逻辑，帮助团队实现效能提升\",\n  \"img\": \"https://user-gold-cdn.xitu.io/2018/9/5/165a8a3d93f6ca7d?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1\"\n}, {\n  \"title\": \"区块链开发入门：从 0 到 1 构建基于以太坊智能合约的 ICO DApp\",\n  \"desc\": \"写给前端开发者的第一本区块链开发入门指南，通过 DApp 开发实战（基于以太坊创始人 V 神的 DAICO 设计思想），深入掌握区块链及以太坊技术\",\n  \"img\": \"https://user-gold-cdn.xitu.io/2018/5/17/1636d772f3d23cf1?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1\"\n}, {\n  \"title\": \"基于 JavaScript 开发灵活的数据应用\",\n  \"desc\": \"使用 JavaScript、ECharts、Vue.js 等开发工具，完成各种数据结构的处理、转换、动态过滤以及数据可视化的开发。\",\n  \"img\": \"https://user-gold-cdn.xitu.io/2018/4/9/162a9c24e48d274b?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1\"\n}, {\n  \"title\": \"Web 前端面试指南与高频考题解析\",\n  \"desc\": \"找工作面试是门技术活，掌握一定技巧可以让你事半功倍\",\n  \"img\": \"https://user-gold-cdn.xitu.io/2018/3/5/161f664af48f2400?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1\"\n}, {\n  \"title\": \"大厂 H5 开发实战手册\",\n  \"desc\": \"京东、腾讯等大厂 H5 开发或 UI 开发工程师的真实实战技巧\",\n  \"img\": \"https://user-gold-cdn.xitu.io/2018/5/9/16342f9666cf9b8f?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1\"\n}, {\n  \"title\": \"使用 webpack 定制前端开发环境\",\n  \"desc\": \"基于 4.x 版本，从细节和深度上弄懂 webpack，随心所欲定制前端开发环境\",\n  \"img\": \"https://user-gold-cdn.xitu.io/2018/3/2/161e5a0aebdab5ed?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1\"\n}, {\n  \"title\": \"剖析 Vue.js 内部运行机制\",\n  \"desc\": \"把原理抽象为小 Demo，以一种对新手友好的方式带领读者漫游 Vue.js 的世界\",\n  \"img\": \"https://user-gold-cdn.xitu.io/2018/1/16/160fdc404b36a1a0?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1\"\n}, {\n  \"title\": \"Git 原理详解及实用指南\",\n  \"desc\": \"让你不仅用上、更用明白的 Git 实用指南\",\n  \"img\": \"https://user-gold-cdn.xitu.io/2017/11/27/15ffbb05174a57f8?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1\"\n}, {\n  \"title\": \"用 npm script 打造超溜的前端工作流\",\n  \"desc\": \"抛弃笨重的构建工具，拥抱轻巧而不失强大的 npm script，随小册赠送视频版教程。\",\n  \"img\": \"https://user-gold-cdn.xitu.io/2017/11/20/15fd699517c3c6a4?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1\"\n}, {\n  \"title\": \"如何使用 Canvas 制作出炫酷的网页背景特效\",\n  \"desc\": \"从零开始学习 Canvas 相关知识，分析其特效，最终制作出炫酷的网页背景\",\n  \"img\": \"https://user-gold-cdn.xitu.io/2017/11/20/15fd79563b28dd6e?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1\"\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (data);\n\n//# sourceURL=webpack:///./src/client/pages/list/data.js?");

/***/ }),

/***/ "./src/client/pages/list/index.js":
/*!****************************************!*\
  !*** ./src/client/pages/list/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ \"./src/client/pages/list/data.js\");\n/* harmony import */ var constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! constants */ \"constants\");\n/* harmony import */ var constants__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(constants__WEBPACK_IMPORTED_MODULE_3__);\n//src/client/pages/list/index.js\n//index 组件\n\n\n\n //组件\n\nclass Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n    let initialData = null; //初始化数据\n\n    if (true) {\n      //如果是当然是服务端执行\n      initialData = props.staticContext.initialData || {};\n    } else {}\n\n    this.state = {\n      page: initialData.page,\n      fetchData: initialData.fetchData\n    };\n  }\n\n  static async getInitialProps() {\n    console.log('fetch data'); //模拟数据请求方法\n\n    const fetchData = () => {\n      return new Promise(resolve => {\n        setTimeout(() => {\n          resolve({\n            code: 0,\n            data: _data__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n          });\n        }, 100);\n      });\n    };\n\n    let res = await fetchData();\n    return {\n      fetchData: res,\n      page: {\n        tdk: {\n          title: '列表页 - react ssr',\n          keywords: '前端技术江湖',\n          description: '关键词'\n        }\n      }\n    };\n  }\n\n  componentDidMount() {\n    if (!this.state.fetchData) {\n      //如果没有数据，则进行数据请求\n      Index.getInitialProps().then(res => {\n        this.setState({\n          fetchData: res.fetchData || [],\n          page: res.page\n        });\n        document.title = res.page.tdk.title;\n      });\n    }\n\n    if (this.state.page && this.state.page.tdk) {\n      document.title = this.state.page.tdk.title;\n    }\n  }\n\n  render() {\n    //渲染数据\n    const {\n      code,\n      data\n    } = this.state.fetchData || {};\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, data && data.map((item, index) => {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        key: index\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, item.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, item.desc));\n    }), !data && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"\\u6682\\u65E0\\u6570\\u636E\"));\n  }\n\n}\n\n//# sourceURL=webpack:///./src/client/pages/list/index.js?");

/***/ }),

/***/ "./src/client/public/img.jpg":
/*!***********************************!*\
  !*** ./src/client/public/img.jpg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"/img/img.jpg\");\n\n//# sourceURL=webpack:///./src/client/public/img.jpg?");

/***/ }),

/***/ "./src/client/router/index.js":
/*!************************************!*\
  !*** ./src/client/router/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app/layout */ \"./src/client/app/layout.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n// src/client/router/indxex.js\n//路由配置文件\n\n\n\n\nfunction Page404() {\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, \"404\\u62C9 \");\n}\n\nfunction App({\n  routeList\n}) {\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_app_layout__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Switch\"], null, routeList.map(item => {\n    return item.initialData ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n      key: item.path,\n      exact: item.exact,\n      path: item.path,\n      render: props => {\n        props.initialData = item.initialData;\n        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(item.component, props);\n      }\n    }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], _extends({\n      key: item.path\n    }, item));\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n    to: \"*\",\n    component: Page404\n  })));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/client/router/index.js?");

/***/ }),

/***/ "./src/client/router/route-config.js":
/*!*******************************************!*\
  !*** ./src/client/router/route-config.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/index */ \"./src/client/pages/index/index.js\");\n/* harmony import */ var _pages_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/list */ \"./src/client/pages/list/index.js\");\n//路由配置文件\n\n\n\nfunction pageNotFound() {\n  return React.createElement(\"div\", null, \"404\\u9875\\u9762\");\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  path: '/',\n  component: _pages_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  exact: true\n}, {\n  path: '/index',\n  component: _pages_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  exact: true\n}, {\n  path: '/list',\n  component: _pages_list__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  exact: true\n}, {\n  path: '*',\n  component: pageNotFound,\n  exact: true\n}]);\n\n//# sourceURL=webpack:///./src/client/router/route-config.js?");

/***/ }),

/***/ "./src/server/app/index.js":
/*!*********************************!*\
  !*** ./src/server/app/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _middlewares_react_ssr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../middlewares/react-ssr */ \"./src/server/middlewares/react-ssr.js\");\n/* harmony import */ var koa2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa2 */ \"koa2\");\n/* harmony import */ var koa2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa2__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! koa-static */ \"koa-static\");\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(koa_static__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _share_pro_config_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../share/pro-config.js */ \"./src/share/pro-config.js\");\n/* harmony import */ var _share_pro_config_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_share_pro_config_js__WEBPACK_IMPORTED_MODULE_4__);\n//web 服务启动入口对象\n\n\n\n\n\nconst port = _share_pro_config_js__WEBPACK_IMPORTED_MODULE_4___default.a.nodeServerPort || Object({\"NODE_ENV\":\"undefined\"}).PORT;\nconst app = new koa2__WEBPACK_IMPORTED_MODULE_1___default.a(); //设置可访问的静态资源\n\napp.use(koa_static__WEBPACK_IMPORTED_MODULE_2___default()('./dist/static')); //ssr 中间件\n\napp.use(_middlewares_react_ssr__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); //启动服务\n\napp.listen(port);\nconsole.log('server is start .', `http://localhost:${port}`);\n\n//# sourceURL=webpack:///./src/server/app/index.js?");

/***/ }),

/***/ "./src/server/common/assets.js":
/*!*************************************!*\
  !*** ./src/server/common/assets.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// src/server/common/assets.js\n//生产环境中 静态资源的处理\nmodule.exports = function () {\n  //let devHost = '//localhost:9001';\n  let devHost = '//localhost:9002';\n  let jsFiles = ['libs.js', 'main.js'];\n  let cssFiles = ['main.css'];\n  const assets = {\n    js: [],\n    css: []\n  };\n\n  if (true) {\n    //开发环境\n    assets.js.push(`<script type=\"text/javascript\"  src=\"${devHost}/libs.js\"></script>`);\n    assets.js.push(`<script type=\"text/javascript\"  src=\"${devHost}/main.js\"></script>`);\n    assets.css.push(`<link rel=\"stylesheet\" type=\"text/css\" href=\"${devHost}/main.css\" />`);\n  } else {}\n\n  return assets;\n};\n\n//# sourceURL=webpack:///./src/server/common/assets.js?");

/***/ }),

/***/ "./src/server/middlewares/react-ssr.js":
/*!*********************************************!*\
  !*** ./src/server/middlewares/react-ssr.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _client_app_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../client/app/layout */ \"./src/client/app/layout.js\");\n/* harmony import */ var _client_router_route_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../client/router/route-config */ \"./src/client/router/route-config.js\");\n/* harmony import */ var _client_app_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../client/app/provider */ \"./src/client/app/provider.js\");\n/* harmony import */ var _share_match_route__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../share/match-route */ \"./src/share/match-route.js\");\n/* harmony import */ var _client_router_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../client/router/index */ \"./src/client/router/index.js\");\n// /src/server/middlewares/react-ssr.js\n//完成 react ssr 工作的中间件\n//引入Index 组件\n\n\n\n\n //如果有 layout 组件，也需要一起转换为 html\n\n //自定义 provider 用来传递数据\n\n\n\n\n\nconst getAssets = __webpack_require__(/*! ../common/assets */ \"./src/server/common/assets.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (ctx, next) => {\n  console.log(\"undefined\");\n  console.log(\"string\");\n  console.log(false);\n  console.log(\"boolean\");\n  console.log('====');\n  const path = ctx.request.path;\n\n  if (path.indexOf('.') > -1) {\n    ctx.body = null;\n    return next();\n  }\n\n  console.log('ctx.request.path', ctx.request.path); //查找到的目标路由对象\n\n  let matchResult = Object(_share_match_route__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(path, _client_router_route_config__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n  let {\n    targetRoute,\n    targetMatch\n  } = matchResult; //得到数据\n\n  let fetchDataFn = targetRoute.component.getInitialProps;\n  let fetchResult = {};\n\n  if (fetchDataFn) {\n    fetchResult = await fetchDataFn();\n  }\n\n  let {\n    page\n  } = fetchResult || {};\n  let tdk = {\n    title: '默认标题 - my react ssr',\n    keywords: '默认关键词',\n    description: '默认描述'\n  };\n\n  if (page && page.tdk) {\n    tdk = page.tdk;\n  } //将预取数据在这里传递过去 组内通过props.staticContext获取\n\n\n  const context = {\n    initialData: fetchResult\n  };\n  const html = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__[\"StaticRouter\"], {\n    location: path,\n    context: context\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_client_router_index__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    routeList: _client_router_route_config__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  }))); //静态资源\n\n  const assetsMap = getAssets();\n  ctx.body = `<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>${tdk.title}</title>\n    <meta name=\"keywords\" content=\"${tdk.keywords}\" />\n    <meta name=\"description\" content=\"${tdk.description}\" />\n     ${assetsMap.css.join('')}\n</head>\n<body>\n    <div id=\"root\">\n       ${html}\n    </div>\n    <textarea id=\"ssrTextInitData\" style=\"display:none;\">\n    ${JSON.stringify(fetchResult)}\n    </textarea>\n</body>\n</html>\n</body>\n ${assetsMap.js.join('')}\n`;\n  await next();\n});\n\n//# sourceURL=webpack:///./src/server/middlewares/react-ssr.js?");

/***/ }),

/***/ "./src/share/match-route.js":
/*!**********************************!*\
  !*** ./src/share/match-route.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_0__);\n// src/share/match-route.js\n//路由匹配，然后根据匹配的路由得到对应的组件\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((path, routeList) => {\n  let targetRoute, targetMatch;\n\n  for (var item of routeList) {\n    targetMatch = Object(react_router__WEBPACK_IMPORTED_MODULE_0__[\"matchPath\"])(path, item);\n\n    if (targetMatch) {\n      targetRoute = item; //查找到第一个路由后停止查找\n\n      break;\n    }\n  }\n\n  return {\n    targetRoute,\n    targetMatch\n  };\n});\n\n//# sourceURL=webpack:///./src/share/match-route.js?");

/***/ }),

/***/ "./src/share/pro-config.js":
/*!*********************************!*\
  !*** ./src/share/pro-config.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//双端公用的配置文件\nmodule.exports = {\n  wdsPort: 9002,\n  //wds 服务的运行端口\n  nodeServerPort: 9001,\n  //node server 的监听端口\n  asyncComponentKey: '__IS_ASYNC_COMP_FLAG__' //标志组件是否是按需加载 turn | false\n\n};\n\n//# sourceURL=webpack:///./src/share/pro-config.js?");

/***/ }),

/***/ "constants":
/*!****************************!*\
  !*** external "constants" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"constants\");\n\n//# sourceURL=webpack:///external_%22constants%22?");

/***/ }),

/***/ "koa-static":
/*!*****************************!*\
  !*** external "koa-static" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-static\");\n\n//# sourceURL=webpack:///external_%22koa-static%22?");

/***/ }),

/***/ "koa2":
/*!***********************!*\
  !*** external "koa2" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa2\");\n\n//# sourceURL=webpack:///external_%22koa2%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader/root\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader/root%22?");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router\");\n\n//# sourceURL=webpack:///external_%22react-router%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ })

/******/ });