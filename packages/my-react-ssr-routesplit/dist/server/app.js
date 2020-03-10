/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + chunkId + ".app.js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
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

/***/ "./src/client/router/async-bundle.js":
/*!*******************************************!*\
  !*** ./src/client/router/async-bundle.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AsyncBundle; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _loading_compoent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading-compoent */ \"./src/client/router/loading-compoent.js\");\n\n\n/**\n * 动态加载组件一个组的容器\n *\n * @class Bundle\n * @extends {Component}\n */\n\nclass AsyncBundle extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      mod: null\n    };\n  }\n\n  componentDidMount() {\n    if (!this.state.mod) {\n      this.load(this.props);\n    }\n  } // UNSAFE_componentWillReceiveProps(nextProps) {\n  //     //路由改变才会按需\n  //     if (nextProps.match && this.props.match && (nextProps.match.url !== this.props.match.url)) {\n  //         this.load(nextProps);\n  //     }\n  // }\n\n\n  load(props) {\n    this.setState({\n      mod: null\n    }); //注意这里，使用Promise对象; mod.default导出默认\n\n    props.load().then(mod => {\n      this.setState({\n        mod: mod.default ? mod.default : mod\n      });\n    });\n  }\n\n  render() {\n    return this.state.mod ? this.props.children(this.state.mod) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_loading_compoent__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null);\n  }\n\n}\n\n//# sourceURL=webpack:///./src/client/router/async-bundle.js?");

/***/ }),

/***/ "./src/client/router/async-loader.js":
/*!*******************************************!*\
  !*** ./src/client/router/async-loader.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _async_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./async-bundle */ \"./src/client/router/async-bundle.js\");\n/* harmony import */ var _share_pro_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../share/pro-config */ \"./src/share/pro-config.js\");\n/* harmony import */ var _share_pro_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_share_pro_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n//异步加载组件的高阶函数\n\n\n\n\nfunction AsyncLoader(loader) {\n  function asyncFn(props) {\n    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_async_bundle__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n      load: loader\n    }, Comp => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Comp, props));\n  } //标记为异步组件\n\n\n  asyncFn[_share_pro_config__WEBPACK_IMPORTED_MODULE_1___default.a.asyncComponentKey] = true;\n  return asyncFn;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AsyncLoader);\n\n//# sourceURL=webpack:///./src/client/router/async-loader.js?");

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

/***/ "./src/client/router/loading-compoent.js":
/*!***********************************************!*\
  !*** ./src/client/router/loading-compoent.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LoadingComponent; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n//等待组件加载 渲染的 loading组件\n\nfunction LoadingComponent(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"loading......\");\n}\n\n//# sourceURL=webpack:///./src/client/router/loading-compoent.js?");

/***/ }),

/***/ "./src/client/router/route-config.js":
/*!*******************************************!*\
  !*** ./src/client/router/route-config.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _async_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./async-loader */ \"./src/client/router/async-loader.js\");\n//路由配置文件\n //import List from '../pages/list';\n//import Index from '../pages/index';\n//组件动态加载容器\n\n\n\nfunction pageNotFound() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"404\\u9875\\u9762\");\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  path: ['/', '/index'],\n  component: Object(_async_loader__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../pages/index */ \"./src/client/pages/index/index.js\"))),\n  exact: true\n}, {\n  path: '/list',\n  component: Object(_async_loader__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(() => __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../pages/list */ \"./src/client/pages/list/index.js\"))),\n  exact: true\n}, {\n  path: '*',\n  component: pageNotFound,\n  exact: true\n}]);\n\n//# sourceURL=webpack:///./src/client/router/route-config.js?");

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

eval("// src/server/common/assets.js\n//生产环境中 静态资源的处理\nmodule.exports = function () {\n  //let devHost = '//localhost:9001';\n  let devHost = '//localhost:9002';\n  let jsFiles = ['libs.js', 'main.js', 'styles.js'];\n  let cssFiles = ['styles.css'];\n  const assets = {\n    js: [],\n    css: []\n  };\n\n  if (true) {\n    //开发环境\n    assets.js.push(`<script type=\"text/javascript\"  src=\"${devHost}/libs.js\"></script>`);\n    assets.js.push(`<script type=\"text/javascript\"  src=\"${devHost}/main.js\"></script>`);\n    assets.js.push(`<script type=\"text/javascript\"  src=\"${devHost}/styles.js\"></script>`);\n    assets.css.push(`<link rel=\"stylesheet\" type=\"text/css\" href=\"${devHost}/styles.css\" />`);\n  } else {}\n\n  return assets;\n};\n\n//# sourceURL=webpack:///./src/server/common/assets.js?");

/***/ }),

/***/ "./src/server/common/get-static-routes.js":
/*!************************************************!*\
  !*** ./src/server/common/get-static-routes.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _share_pro_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../share/pro-config */ \"./src/share/pro-config.js\");\n/* harmony import */ var _share_pro_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_share_pro_config__WEBPACK_IMPORTED_MODULE_0__);\n//路由静态化处理\n\n\nconst checkIsAsyncRoute = component => {\n  console.log('component.name', component[_share_pro_config__WEBPACK_IMPORTED_MODULE_0___default.a.asyncComponentKey]);\n  return component[_share_pro_config__WEBPACK_IMPORTED_MODULE_0___default.a.asyncComponentKey];\n}; //将路由转换为静态路由\n\n\nasync function getStaticRoutes(routes) {\n  const key = '__dynamics_route_to_static';\n\n  if (global[key]) {\n    return global[key];\n  }\n\n  let len = routes.length,\n      i = 0;\n  const staticRoutes = [];\n\n  for (; i < len; i++) {\n    let item = routes[i];\n\n    if (checkIsAsyncRoute(item.component)) {\n      staticRoutes.push({ ...item,\n        ...{\n          component: (await item.component().props.load()).default\n        }\n      });\n    } else {\n      staticRoutes.push({ ...item\n      });\n    }\n  }\n\n  global[key] = staticRoutes;\n  return staticRoutes; //返回静态路由\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getStaticRoutes);\n\n//# sourceURL=webpack:///./src/server/common/get-static-routes.js?");

/***/ }),

/***/ "./src/server/middlewares/react-ssr.js":
/*!*********************************************!*\
  !*** ./src/server/middlewares/react-ssr.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _client_app_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../client/app/layout */ \"./src/client/app/layout.js\");\n/* harmony import */ var _client_router_route_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../client/router/route-config */ \"./src/client/router/route-config.js\");\n/* harmony import */ var _client_app_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../client/app/provider */ \"./src/client/app/provider.js\");\n/* harmony import */ var _share_match_route__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../share/match-route */ \"./src/share/match-route.js\");\n/* harmony import */ var _client_router_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../client/router/index */ \"./src/client/router/index.js\");\n/* harmony import */ var _common_get_static_routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/get-static-routes */ \"./src/server/common/get-static-routes.js\");\n// /src/server/middlewares/react-ssr.js\n//完成 react ssr 工作的中间件\n//引入Index 组件\n\n\n\n\n //如果有 layout 组件，也需要一起转换为 html\n\n //自定义 provider 用来传递数据\n\n\n\n\n\n\nconst getAssets = __webpack_require__(/*! ../common/assets */ \"./src/server/common/assets.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (ctx, next) => {\n  console.log(\"undefined\");\n  console.log(\"string\");\n  console.log(false);\n  console.log(\"boolean\");\n  console.log('====');\n  const path = ctx.request.path;\n\n  if (path.indexOf('.') > -1) {\n    ctx.body = null;\n    return next();\n  }\n\n  console.log('ctx.request.path', ctx.request.path); //获得静态路由\n\n  const staticRoutesList = await Object(_common_get_static_routes__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(_client_router_route_config__WEBPACK_IMPORTED_MODULE_5__[\"default\"]); //查找到的目标路由对象\n\n  let matchResult = await Object(_share_match_route__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(path, staticRoutesList);\n  let {\n    targetRoute,\n    targetMatch\n  } = matchResult; //得到数据\n\n  let fetchDataFn = targetRoute.component.getInitialProps;\n  let fetchResult = {};\n\n  if (fetchDataFn) {\n    fetchResult = await fetchDataFn();\n  }\n\n  let {\n    page\n  } = fetchResult || {};\n  let tdk = {\n    title: '默认标题 - my react ssr',\n    keywords: '默认关键词',\n    description: '默认描述'\n  };\n\n  if (page && page.tdk) {\n    tdk = page.tdk;\n  } //将预取数据在这里传递过去 组内通过props.staticContext获取\n\n\n  const context = {\n    initialData: fetchResult\n  };\n  const html = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__[\"StaticRouter\"], {\n    location: path,\n    context: context\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_client_router_index__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    routeList: staticRoutesList\n  }))); //静态资源\n\n  const assetsMap = getAssets();\n  ctx.body = `<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>${tdk.title}</title>\n    <meta name=\"keywords\" content=\"${tdk.keywords}\" />\n    <meta name=\"description\" content=\"${tdk.description}\" />\n     ${assetsMap.css.join('')}\n</head>\n<body>\n    <div id=\"root\">\n       ${html}\n    </div>\n    <textarea id=\"ssrTextInitData\" style=\"display:none;\">\n    ${JSON.stringify(fetchResult)}\n    </textarea>\n</body>\n</html>\n</body>\n ${assetsMap.js.join('')}\n`;\n  await next();\n});\n\n//# sourceURL=webpack:///./src/server/middlewares/react-ssr.js?");

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