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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js!./src/client/app/layout.scss":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/postcss-loader/src!./node_modules/sass-loader/dist/cjs.js!./src/client/app/layout.scss ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"body {\\n  background-color: #f4f5f5; }\\n\\n.layout-box {\\n  max-width: 750px;\\n  margin: 0 auto;\\n  text-align: center;\\n  background: #fff; }\\n  .layout-box h1 {\\n    margin-top: 20px;\\n    margin-top: 20px; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/client/app/layout.scss?./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/postcss-loader/src!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/isomorphic-style-loader/insertCss.js":
/*!***********************************************************!*\
  !*** ./node_modules/isomorphic-style-loader/insertCss.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */\n\n\n\nvar inserted = {};\n\nfunction b64EncodeUnicode(str) {\n  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {\n    return String.fromCharCode(\"0x\" + p1);\n  }));\n}\n\nfunction removeCss(ids) {\n  ids.forEach(function (id) {\n    if (--inserted[id] <= 0) {\n      var elem = document.getElementById(id);\n\n      if (elem) {\n        elem.parentNode.removeChild(elem);\n      }\n    }\n  });\n}\n\nfunction insertCss(styles, _temp) {\n  var _ref = _temp === void 0 ? {} : _temp,\n      _ref$replace = _ref.replace,\n      replace = _ref$replace === void 0 ? false : _ref$replace,\n      _ref$prepend = _ref.prepend,\n      prepend = _ref$prepend === void 0 ? false : _ref$prepend,\n      _ref$prefix = _ref.prefix,\n      prefix = _ref$prefix === void 0 ? 's' : _ref$prefix;\n\n  var ids = [];\n\n  for (var i = 0; i < styles.length; i++) {\n    var _styles$i = styles[i],\n        moduleId = _styles$i[0],\n        css = _styles$i[1],\n        media = _styles$i[2],\n        sourceMap = _styles$i[3];\n    var id = \"\" + prefix + moduleId + \"-\" + i;\n    ids.push(id);\n\n    if (inserted[id]) {\n      if (!replace) {\n        inserted[id]++;\n        continue;\n      }\n    }\n\n    inserted[id] = 1;\n    var elem = document.getElementById(id);\n    var create = false;\n\n    if (!elem) {\n      create = true;\n      elem = document.createElement('style');\n      elem.setAttribute('type', 'text/css');\n      elem.id = id;\n\n      if (media) {\n        elem.setAttribute('media', media);\n      }\n    }\n\n    var cssText = css;\n\n    if (sourceMap && typeof btoa === 'function') {\n      cssText += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + b64EncodeUnicode(JSON.stringify(sourceMap)) + \"*/\";\n      cssText += \"\\n/*# sourceURL=\" + sourceMap.file + \"?\" + id + \"*/\";\n    }\n\n    if ('textContent' in elem) {\n      elem.textContent = cssText;\n    } else {\n      elem.styleSheet.cssText = cssText;\n    }\n\n    if (create) {\n      if (prepend) {\n        document.head.insertBefore(elem, document.head.childNodes[0]);\n      } else {\n        document.head.appendChild(elem);\n      }\n    }\n  }\n\n  return removeCss.bind(null, ids);\n}\n\nmodule.exports = insertCss;\n//# sourceMappingURL=insertCss.js.map\n\n\n//# sourceURL=webpack:///./node_modules/isomorphic-style-loader/insertCss.js?");

/***/ }),

/***/ "./src/client/app/layout.js":
/*!**********************************!*\
  !*** ./src/client/app/layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\n/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-style-loader/withStyles */ \"isomorphic-style-loader/withStyles\");\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _layout_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout.scss */ \"./src/client/app/layout.scss\");\n/* harmony import */ var _layout_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_layout_scss__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nclass Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"layout-box\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"koa+react+ssr\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n      to: \"/index\",\n      style: {\n        marginLeft: \"10px\"\n      }\n    }, \"\\u9996\\u9875\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n      style: {\n        marginLeft: \"10px\"\n      },\n      to: \"/list\"\n    }, \"\\u5217\\u8868\\u9875\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n      style: {\n        marginLeft: \"10px\"\n      },\n      to: \"/about\"\n    }, \"\\u5173\\u4E8E\"), this.props.children);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_4___default()(_layout_scss__WEBPACK_IMPORTED_MODULE_5___default.a)(Object(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_3__[\"hot\"])(Index)));\n\n//# sourceURL=webpack:///./src/client/app/layout.js?");

/***/ }),

/***/ "./src/client/app/layout.scss":
/*!************************************!*\
  !*** ./src/client/app/layout.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/postcss-loader/src!../../../node_modules/sass-loader/dist/cjs.js!./layout.scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js!./src/client/app/layout.scss\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/client/app/layout.scss?");

/***/ }),

/***/ "./src/client/pages/about/redux/index.js":
/*!***********************************************!*\
  !*** ./src/client/pages/about/redux/index.js ***!
  \***********************************************/
/*! exports provided: ACTION_TYPE, getInitialData, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ACTION_TYPE\", function() { return ACTION_TYPE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getInitialData\", function() { return getInitialData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reducer\", function() { return reducer; });\n//action type\nconst ACTION_TYPE = {\n  setInitData: 'about/setInitData'\n}; //更新数据\n\nconst setInitData = data => ({\n  type: ACTION_TYPE.setInitData,\n  data\n}); //异步获得数据 【副作用】\n\n\nconst getInitialData = props => {\n  return (dispatch, getState) => {\n    return new Promise(resolve => {\n      setTimeout(() => {\n        const data = {\n          fetchData: {\n            code: 0,\n            data: {\n              str: '项目技术栈 - koa2 react16 react-router5 webpack4 babel7 node'\n            }\n          },\n          page: {\n            tdk: {\n              title: '关于 - koa-react-ssr',\n              keywords: '关键词 koa-react-ssr',\n              description: '描述 koa-react-ssr'\n            }\n          }\n        };\n        resolve(data);\n        dispatch(setInitData(data));\n      }, 500);\n    });\n  };\n}; //默认数据\n\nconst defaultState = {\n  fetchData: {},\n  page: {}\n};\nconst reducer = (state = defaultState, action) => {\n  switch (action.type) {\n    case ACTION_TYPE.setInitData:\n      return { ...state,\n        ...action.data\n      };\n\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack:///./src/client/pages/about/redux/index.js?");

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

/***/ "./src/client/pages/list/redux/index.js":
/*!**********************************************!*\
  !*** ./src/client/pages/list/redux/index.js ***!
  \**********************************************/
/*! exports provided: ACTION_TYPE, getInitialData, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ACTION_TYPE\", function() { return ACTION_TYPE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getInitialData\", function() { return getInitialData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reducer\", function() { return reducer; });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data */ \"./src/client/pages/list/data.js\");\n //action type\n\nconst ACTION_TYPE = {\n  changeList: 'list/changelist'\n}; //更新数据\n\nconst changeList = list => ({\n  type: ACTION_TYPE.changeList,\n  list\n}); //异步获得数据 【副作用】\n\n\nconst getInitialData = props => {\n  return (dispatch, getState) => {\n    return new Promise(resolve => {\n      setTimeout(() => {\n        const data = {\n          fetchData: {\n            code: 0,\n            data: _data__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n          },\n          page: {\n            tdk: {\n              title: '列表页 - koa-react-ssr',\n              keywords: '关键词 koa-react-ssr',\n              description: '描述 koa-react-ssr'\n            }\n          }\n        };\n        resolve(data);\n        dispatch(changeList(data));\n      }, 500);\n    });\n  };\n}; //默认数据\n\nconst defaultState = {\n  fetchData: {},\n  page: {}\n};\nconst reducer = (state = defaultState, action) => {\n  switch (action.type) {\n    case ACTION_TYPE.changeList:\n      return { ...state,\n        ...action.list\n      };\n\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack:///./src/client/pages/list/redux/index.js?");

/***/ }),

/***/ "./src/client/router/async-bundle.js":
/*!*******************************************!*\
  !*** ./src/client/router/async-bundle.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AsyncBundle; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _loading_compoent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading-compoent */ \"./src/client/router/loading-compoent.js\");\n\n\n/**\r\n * 动态加载组件一个组的容器\r\n *\r\n * @class Bundle\r\n * @extends {Component}\r\n */\n\nclass AsyncBundle extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      mod: null\n    };\n  }\n\n  componentDidMount() {\n    if (!this.state.mod) {\n      this.load(this.props);\n    }\n  } // UNSAFE_componentWillReceiveProps(nextProps) {\n  //     //路由改变才会按需\n  //     if (nextProps.match && this.props.match && (nextProps.match.url !== this.props.match.url)) {\n  //         this.load(nextProps);\n  //     }\n  // }\n\n\n  load(props) {\n    this.setState({\n      mod: null\n    }); //注意这里，使用Promise对象; mod.default导出默认\n\n    props.load().then(mod => {\n      this.setState({\n        mod: mod.default ? mod.default : mod\n      });\n    });\n  }\n\n  render() {\n    return this.state.mod ? this.props.children(this.state.mod) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_loading_compoent__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null);\n  }\n\n}\n\n//# sourceURL=webpack:///./src/client/router/async-bundle.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app/layout */ \"./src/client/app/layout.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n// src/client/router/indxex.js\n//路由配置文件\n\n\n\n\nfunction App({\n  routeList\n}) {\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_app_layout__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Switch\"], null, routeList.map(item => {\n    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], _extends({\n      key: item.path\n    }, item));\n  })));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/client/router/index.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _async_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./async-loader */ \"./src/client/router/async-loader.js\");\n//路由配置文件\n //组件动态加载容器\n\n\n\nfunction pageNotFound() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"404\\u9875\\u9762\");\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  path: ['/', '/index'],\n  component: Object(_async_loader__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(() => __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../pages/index */ \"./src/client/pages/index/index.js\"))),\n  exact: true\n}, {\n  path: '/list',\n  component: Object(_async_loader__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(() => __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../pages/list */ \"./src/client/pages/list/index.js\"))),\n  exact: true\n}, {\n  path: '/about',\n  component: Object(_async_loader__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../pages/about */ \"./src/client/pages/about/index.js\"))),\n  exact: true\n}, {\n  path: '*',\n  component: pageNotFound,\n  exact: true\n}]);\n\n//# sourceURL=webpack:///./src/client/router/route-config.js?");

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

eval("// src/server/common/assets.js\n//生产环境中 静态资源的处理\nmodule.exports = function () {\n  //let devHost = '//localhost:9001';\n  let devHost = '//localhost:9002';\n  let jsFiles = ['libs.js', 'main.js', 'styles.js'];\n  let cssFiles = ['styles.css'];\n  const assets = {\n    js: [],\n    css: []\n  };\n\n  if (true) {\n    //开发环境\n    assets.js.push(`<script type=\"text/javascript\"  src=\"${devHost}/libs.js\"></script>`);\n    assets.js.push(`<script type=\"text/javascript\"  src=\"${devHost}/main.js\"></script>`);\n  } else {}\n\n  return assets;\n};\n\n//# sourceURL=webpack:///./src/server/common/assets.js?");

/***/ }),

/***/ "./src/server/common/get-static-routes.js":
/*!************************************************!*\
  !*** ./src/server/common/get-static-routes.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _share_pro_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../share/pro-config */ \"./src/share/pro-config.js\");\n/* harmony import */ var _share_pro_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_share_pro_config__WEBPACK_IMPORTED_MODULE_0__);\n//路由静态化处理\n\n\nconst checkIsAsyncRoute = component => {\n  return component && component[_share_pro_config__WEBPACK_IMPORTED_MODULE_0___default.a.asyncComponentKey];\n}; //将路由转换为静态路由\n\n\nasync function getStaticRoutes(routes) {\n  const key = '__dynamics_route_to_static';\n\n  if (global[key]) {\n    console.log('cache route');\n    return global[key];\n  }\n\n  let len = routes.length,\n      i = 0;\n  const staticRoutes = [];\n\n  for (; i < len; i++) {\n    let item = routes[i];\n\n    if (checkIsAsyncRoute(item.component)) {\n      staticRoutes.push({ ...item,\n        ...{\n          component: (await item.component().props.load()).default\n        }\n      });\n    } else {\n      staticRoutes.push({ ...item\n      });\n    }\n  }\n\n  global[key] = staticRoutes;\n  return staticRoutes; //返回静态路由\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getStaticRoutes);\n\n//# sourceURL=webpack:///./src/server/common/get-static-routes.js?");

/***/ }),

/***/ "./src/server/middlewares/react-ssr.js":
/*!*********************************************!*\
  !*** ./src/server/middlewares/react-ssr.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _client_app_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../client/app/layout */ \"./src/client/app/layout.js\");\n/* harmony import */ var _client_router_route_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../client/router/route-config */ \"./src/client/router/route-config.js\");\n/* harmony import */ var _share_match_route__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../share/match-route */ \"./src/share/match-route.js\");\n/* harmony import */ var _client_router_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../client/router/index */ \"./src/client/router/index.js\");\n/* harmony import */ var _common_get_static_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/get-static-routes */ \"./src/server/common/get-static-routes.js\");\n/* harmony import */ var isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! isomorphic-style-loader/StyleContext */ \"isomorphic-style-loader/StyleContext\");\n/* harmony import */ var isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _share_redux_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../share/redux/store */ \"./src/share/redux/store.js\");\n// /src/server/middlewares/react-ssr.js\n//完成 react ssr 工作的中间件\n//引入Index 组件\n\n\n\n\n //如果有 layout 组件，也需要一起转换为 html\n\n\n\n\n //css 同构的上下文\n\n\n\nconst getAssets = __webpack_require__(/*! ../common/assets */ \"./src/server/common/assets.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (ctx, next) => {\n  const path = ctx.request.path;\n\n  if (path.indexOf('.') > -1) {\n    ctx.body = null;\n    return next();\n  }\n\n  console.log('ctx.request.path', ctx.request.path); //获得静态路由\n\n  const staticRoutesList = await Object(_common_get_static_routes__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_client_router_route_config__WEBPACK_IMPORTED_MODULE_5__[\"default\"]); //查找到的目标路由对象\n\n  let matchResult = await Object(_share_match_route__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(path, staticRoutesList);\n  let {\n    targetRoute,\n    targetMatch\n  } = matchResult;\n  const store = Object(_share_redux_store__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(); //得到数据\n\n  let fetchDataFn,\n      fetchResult = {};\n\n  if (targetRoute) {\n    fetchDataFn = targetRoute.component ? targetRoute.component.getInitialProps : null;\n\n    if (fetchDataFn) {\n      fetchResult = await fetchDataFn({\n        store\n      }); //更新 state \n    }\n  }\n\n  let {\n    page\n  } = fetchResult || {}; //TODO:/这里tdk 就获取不到了\n\n  let tdk = {\n    title: '默认标题 - koa+react+ssr',\n    keywords: '默认关键词',\n    description: '默认描述'\n  };\n\n  if (page && page.tdk) {\n    tdk = page.tdk;\n  }\n\n  const context = {};\n  const css = new Set(); // CSS for all rendered React components\n\n  const insertCss = (...styles) => styles.forEach(style => css.add(style._getContent()));\n\n  const html = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_10__[\"Provider\"], {\n    store: store\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__[\"StaticRouter\"], {\n    location: path,\n    context: context\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_9___default.a.Provider, {\n    value: {\n      insertCss\n    }\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_client_router_index__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    routeList: staticRoutesList\n  })))));\n  const styles = [];\n  [...css].forEach(item => {\n    let [mid, content] = item[0];\n    styles.push(`<style id=\"s${mid}-0\">${content}</style>`);\n  }); //静态资源\n\n  const assetsMap = getAssets();\n  ctx.body = `<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>${tdk.title}</title>\n    <meta name=\"keywords\" content=\"${tdk.keywords}\" />\n    <meta name=\"description\" content=\"${tdk.description}\" />\n    ${styles.join('')}\n</head>\n<body>\n    <div id=\"root\">\n       ${html}\n    </div>\n    <textarea id=\"ssrTextInitData\" style=\"display:none;\">\n    ${JSON.stringify(store.getState())}\n    </textarea>\n</body>\n</html>\n</body>\n ${assetsMap.js.join('')}\n`;\n  await next();\n});\n\n//# sourceURL=webpack:///./src/server/middlewares/react-ssr.js?");

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

/***/ "./src/share/redux/reducer.js":
/*!************************************!*\
  !*** ./src/share/redux/reducer.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _client_pages_list_redux_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../client/pages/list/redux/index */ \"./src/client/pages/list/redux/index.js\");\n/* harmony import */ var _client_pages_about_redux_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../client/pages/about/redux/index */ \"./src/client/pages/about/redux/index.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_2__[\"combineReducers\"])({\n  listPage: _client_pages_list_redux_index__WEBPACK_IMPORTED_MODULE_0__[\"reducer\"],\n  aboutPage: _client_pages_about_redux_index__WEBPACK_IMPORTED_MODULE_1__[\"reducer\"]\n}));\n\n//# sourceURL=webpack:///./src/share/redux/reducer.js?");

/***/ }),

/***/ "./src/share/redux/store.js":
/*!**********************************!*\
  !*** ./src/share/redux/store.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer */ \"./src/share/redux/reducer.js\");\n/* harmony import */ var _test_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test-middleware */ \"./src/share/redux/test-middleware.js\");\n//redux store.js\n//用于获取数据\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((defualtState = {}) => {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_reducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], defualtState, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a));\n});\n\n//# sourceURL=webpack:///./src/share/redux/store.js?");

/***/ }),

/***/ "./src/share/redux/test-middleware.js":
/*!********************************************!*\
  !*** ./src/share/redux/test-middleware.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function ({\n  getState,\n  dispatch\n}) {\n  return next => action => {\n    console.log('pre state', getState()); // 调用 middleware 链中下一个 middleware 的 dispatch。\n\n    next(action);\n    console.log('after dispatch', getState());\n  };\n});\n\n//# sourceURL=webpack:///./src/share/redux/test-middleware.js?");

/***/ }),

/***/ "isomorphic-style-loader/StyleContext":
/*!*******************************************************!*\
  !*** external "isomorphic-style-loader/StyleContext" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-style-loader/StyleContext\");\n\n//# sourceURL=webpack:///external_%22isomorphic-style-loader/StyleContext%22?");

/***/ }),

/***/ "isomorphic-style-loader/withStyles":
/*!*****************************************************!*\
  !*** external "isomorphic-style-loader/withStyles" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-style-loader/withStyles\");\n\n//# sourceURL=webpack:///external_%22isomorphic-style-loader/withStyles%22?");

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

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

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

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });