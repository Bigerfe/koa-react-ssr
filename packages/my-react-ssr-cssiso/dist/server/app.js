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
/******/ 	return __webpack_require__(__webpack_require__.s = "CQCt");
/******/ })
/************************************************************************/
/******/ ({

/***/ "+o4U":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader/root\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader/root%22?");

/***/ }),

/***/ "4Hsq":
/*!******************************!*\
  !*** external "http-errors" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http-errors\");\n\n//# sourceURL=webpack:///external_%22http-errors%22?");

/***/ }),

/***/ "5lGI":
/*!*******************************************************!*\
  !*** external "isomorphic-style-loader/StyleContext" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-style-loader/StyleContext\");\n\n//# sourceURL=webpack:///external_%22isomorphic-style-loader/StyleContext%22?");

/***/ }),

/***/ "6ndv":
/*!******************************!*\
  !*** external "graceful-fs" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graceful-fs\");\n\n//# sourceURL=webpack:///external_%22graceful-fs%22?");

/***/ }),

/***/ "7ITC":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "Akh7":
/*!*********************************************!*\
  !*** ./src/server/middlewares/react-ssr.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"cDcd\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"7ITC\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ \"MGin\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-config */ \"iURj\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _client_app_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../client/app/layout */ \"XLCd\");\n/* harmony import */ var _client_router_route_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../client/router/route-config */ \"TDGe\");\n/* harmony import */ var _client_app_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../client/app/provider */ \"Rj8S\");\n/* harmony import */ var _share_match_route__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../share/match-route */ \"ULIa\");\n/* harmony import */ var _client_router_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../client/router/index */ \"SEu5\");\n/* harmony import */ var _common_get_static_routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/get-static-routes */ \"wnQA\");\n/* harmony import */ var isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! isomorphic-style-loader/StyleContext */ \"5lGI\");\n/* harmony import */ var isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_10__);\n// /src/server/middlewares/react-ssr.js\n//完成 react ssr 工作的中间件\n//引入Index 组件\n\n\n\n\n //如果有 layout 组件，也需要一起转换为 html\n\n //自定义 provider 用来传递数据\n\n\n\n\n //css 同构的上下文\n\n\n\nconst getAssets = __webpack_require__(/*! ../common/assets */ \"iiSy\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (ctx, next) => {\n  console.log(\"undefined\");\n  console.log(\"string\");\n  console.log(false);\n  console.log(\"boolean\");\n  console.log('====');\n  const path = ctx.request.path;\n\n  if (path.indexOf('.') > -1) {\n    ctx.body = null;\n    return next();\n  }\n\n  console.log('ctx.request.path', ctx.request.path); //获得静态路由\n\n  const staticRoutesList = await Object(_common_get_static_routes__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(_client_router_route_config__WEBPACK_IMPORTED_MODULE_5__[\"default\"]); //查找到的目标路由对象\n\n  let matchResult = await Object(_share_match_route__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(path, staticRoutesList);\n  let {\n    targetRoute,\n    targetMatch\n  } = matchResult; //得到数据\n\n  let fetchDataFn,\n      fetchResult = {};\n\n  if (targetRoute) {\n    fetchDataFn = targetRoute.component ? targetRoute.component.getInitialProps : null;\n\n    if (fetchDataFn) {\n      fetchResult = await fetchDataFn();\n    }\n  }\n\n  let {\n    page\n  } = fetchResult || {};\n  let tdk = {\n    title: '默认标题 - my react ssr',\n    keywords: '默认关键词',\n    description: '默认描述'\n  };\n\n  if (page && page.tdk) {\n    tdk = page.tdk;\n  } //将预取数据在这里传递过去 组内通过props.staticContext获取\n\n\n  const context = {\n    initialData: fetchResult\n  };\n  const css = new Set(); // CSS for all rendered React components\n\n  const insertCss = (...styles) => styles.forEach(style => css.add(style._getContent()));\n\n  const html = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__[\"StaticRouter\"], {\n    location: path,\n    context: context\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_10___default.a.Provider, {\n    value: {\n      insertCss\n    }\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_client_router_index__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    routeList: staticRoutesList\n  }))));\n  const styles = [];\n  [...css].forEach(item => {\n    let [mid, content] = item[0];\n    styles.push(`<style id=\"s${mid}-0\">${content}</style>`);\n  }); //静态资源\n\n  const assetsMap = getAssets();\n  ctx.body = `<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>${tdk.title}</title>\n    <meta name=\"keywords\" content=\"${tdk.keywords}\" />\n    <meta name=\"description\" content=\"${tdk.description}\" />\n    ${styles.join('')}\n</head>\n<body>\n    <div id=\"root\">\n       ${html}\n    </div>\n    <textarea id=\"ssrTextInitData\" style=\"display:none;\">\n    ${JSON.stringify(fetchResult)}\n    </textarea>\n</body>\n</html>\n</body>\n ${assetsMap.js.join('')}\n`;\n  await next();\n});\n\n//# sourceURL=webpack:///./src/server/middlewares/react-ssr.js?");

/***/ }),

/***/ "CQCt":
/*!*********************************!*\
  !*** ./src/server/app/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _middlewares_react_ssr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../middlewares/react-ssr */ \"Akh7\");\n/* harmony import */ var koa2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa2 */ \"vAnj\");\n/* harmony import */ var koa2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa2__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! koa-static */ \"cs0u\");\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(koa_static__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"oyvS\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _share_pro_config_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../share/pro-config.js */ \"M0Vd\");\n/* harmony import */ var _share_pro_config_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_share_pro_config_js__WEBPACK_IMPORTED_MODULE_4__);\n//web 服务启动入口对象\n\n\n\n\n\nconst port = _share_pro_config_js__WEBPACK_IMPORTED_MODULE_4___default.a.nodeServerPort || Object({\"NODE_ENV\":\"undefined\"}).PORT;\nconst app = new koa2__WEBPACK_IMPORTED_MODULE_1___default.a(); //设置可访问的静态资源\n\napp.use(koa_static__WEBPACK_IMPORTED_MODULE_2___default()('./dist/static')); //ssr 中间件\n\napp.use(_middlewares_react_ssr__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); //启动服务\n\napp.listen(port);\nconsole.log('server is start .', `http://localhost:${port}`);\n\n//# sourceURL=webpack:///./src/server/app/index.js?");

/***/ }),

/***/ "DU5p":
/*!*******************************************!*\
  !*** ./src/client/router/async-bundle.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AsyncBundle; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"cDcd\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _loading_compoent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading-compoent */ \"NyTM\");\n\n\n/**\n * 动态加载组件一个组的容器\n *\n * @class Bundle\n * @extends {Component}\n */\n\nclass AsyncBundle extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      mod: null\n    };\n  }\n\n  componentDidMount() {\n    if (!this.state.mod) {\n      this.load(this.props);\n    }\n  } // UNSAFE_componentWillReceiveProps(nextProps) {\n  //     //路由改变才会按需\n  //     if (nextProps.match && this.props.match && (nextProps.match.url !== this.props.match.url)) {\n  //         this.load(nextProps);\n  //     }\n  // }\n\n\n  load(props) {\n    this.setState({\n      mod: null\n    }); //注意这里，使用Promise对象; mod.default导出默认\n\n    props.load().then(mod => {\n      this.setState({\n        mod: mod.default ? mod.default : mod\n      });\n    });\n  }\n\n  render() {\n    return this.state.mod ? this.props.children(this.state.mod) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_loading_compoent__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null);\n  }\n\n}\n\n//# sourceURL=webpack:///./src/client/router/async-bundle.js?");

/***/ }),

/***/ "INAJ":
/*!*********************************************************************************!*\
  !*** /Users/zhangjiapeng/666/myfe/koa-react-ssr/node_modules/koa-send/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * Module dependencies.\n */\n\nconst debug = __webpack_require__(/*! debug */ \"i4Cb\")('koa-send')\nconst resolvePath = __webpack_require__(/*! resolve-path */ \"kEd6\")\nconst createError = __webpack_require__(/*! http-errors */ \"4Hsq\")\nconst assert = __webpack_require__(/*! assert */ \"Qs3B\")\nconst fs = __webpack_require__(/*! mz/fs */ \"pnsS\")\n\nconst {\n  normalize,\n  basename,\n  extname,\n  resolve,\n  parse,\n  sep\n} = __webpack_require__(/*! path */ \"oyvS\")\n\n/**\n * Expose `send()`.\n */\n\nmodule.exports = send\n\n/**\n * Send file at `path` with the\n * given `options` to the koa `ctx`.\n *\n * @param {Context} ctx\n * @param {String} path\n * @param {Object} [opts]\n * @return {Function}\n * @api public\n */\n\nasync function send (ctx, path, opts = {}) {\n  assert(ctx, 'koa context required')\n  assert(path, 'pathname required')\n\n  // options\n  debug('send \"%s\" %j', path, opts)\n  const root = opts.root ? normalize(resolve(opts.root)) : ''\n  const trailingSlash = path[path.length - 1] === '/'\n  path = path.substr(parse(path).root.length)\n  const index = opts.index\n  const maxage = opts.maxage || opts.maxAge || 0\n  const immutable = opts.immutable || false\n  const hidden = opts.hidden || false\n  const format = opts.format !== false\n  const extensions = Array.isArray(opts.extensions) ? opts.extensions : false\n  const brotli = opts.brotli !== false\n  const gzip = opts.gzip !== false\n  const setHeaders = opts.setHeaders\n\n  if (setHeaders && typeof setHeaders !== 'function') {\n    throw new TypeError('option setHeaders must be function')\n  }\n\n  // normalize path\n  path = decode(path)\n\n  if (path === -1) return ctx.throw(400, 'failed to decode')\n\n  // index file support\n  if (index && trailingSlash) path += index\n\n  path = resolvePath(root, path)\n\n  // hidden file support, ignore\n  if (!hidden && isHidden(root, path)) return\n\n  let encodingExt = ''\n  // serve brotli file when possible otherwise gzipped file when possible\n  if (ctx.acceptsEncodings('br', 'identity') === 'br' && brotli && (await fs.exists(path + '.br'))) {\n    path = path + '.br'\n    ctx.set('Content-Encoding', 'br')\n    ctx.res.removeHeader('Content-Length')\n    encodingExt = '.br'\n  } else if (ctx.acceptsEncodings('gzip', 'identity') === 'gzip' && gzip && (await fs.exists(path + '.gz'))) {\n    path = path + '.gz'\n    ctx.set('Content-Encoding', 'gzip')\n    ctx.res.removeHeader('Content-Length')\n    encodingExt = '.gz'\n  }\n\n  if (extensions && !/\\.[^/]*$/.exec(path)) {\n    const list = [].concat(extensions)\n    for (let i = 0; i < list.length; i++) {\n      let ext = list[i]\n      if (typeof ext !== 'string') {\n        throw new TypeError('option extensions must be array of strings or false')\n      }\n      if (!/^\\./.exec(ext)) ext = '.' + ext\n      if (await fs.exists(path + ext)) {\n        path = path + ext\n        break\n      }\n    }\n  }\n\n  // stat\n  let stats\n  try {\n    stats = await fs.stat(path)\n\n    // Format the path to serve static file servers\n    // and not require a trailing slash for directories,\n    // so that you can do both `/directory` and `/directory/`\n    if (stats.isDirectory()) {\n      if (format && index) {\n        path += '/' + index\n        stats = await fs.stat(path)\n      } else {\n        return\n      }\n    }\n  } catch (err) {\n    const notfound = ['ENOENT', 'ENAMETOOLONG', 'ENOTDIR']\n    if (notfound.includes(err.code)) {\n      throw createError(404, err)\n    }\n    err.status = 500\n    throw err\n  }\n\n  if (setHeaders) setHeaders(ctx.res, path, stats)\n\n  // stream\n  ctx.set('Content-Length', stats.size)\n  if (!ctx.response.get('Last-Modified')) ctx.set('Last-Modified', stats.mtime.toUTCString())\n  if (!ctx.response.get('Cache-Control')) {\n    const directives = ['max-age=' + (maxage / 1000 | 0)]\n    if (immutable) {\n      directives.push('immutable')\n    }\n    ctx.set('Cache-Control', directives.join(','))\n  }\n  if (!ctx.type) ctx.type = type(path, encodingExt)\n  ctx.body = fs.createReadStream(path)\n\n  return path\n}\n\n/**\n * Check if it's hidden.\n */\n\nfunction isHidden (root, path) {\n  path = path.substr(root.length).split(sep)\n  for (let i = 0; i < path.length; i++) {\n    if (path[i][0] === '.') return true\n  }\n  return false\n}\n\n/**\n * File type.\n */\n\nfunction type (file, ext) {\n  return ext !== '' ? extname(basename(file, ext)) : extname(file)\n}\n\n/**\n * Decode `path`.\n */\n\nfunction decode (path) {\n  try {\n    return decodeURIComponent(path)\n  } catch (err) {\n    return -1\n  }\n}\n\n\n//# sourceURL=webpack:////Users/zhangjiapeng/666/myfe/koa-react-ssr/node_modules/koa-send/index.js?");

/***/ }),

/***/ "JPst":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    for (var i = 0; i < modules.length; i++) {\n      var item = [].concat(modules[i]);\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "M0Vd":
/*!*********************************!*\
  !*** ./src/share/pro-config.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//双端公用的配置文件\nmodule.exports = {\n  wdsPort: 9002,\n  //wds 服务的运行端口\n  nodeServerPort: 9001,\n  //node server 的监听端口\n  asyncComponentKey: '__IS_ASYNC_COMP_FLAG__' //标志组件是否是按需加载 turn | false\n\n};\n\n//# sourceURL=webpack:///./src/share/pro-config.js?");

/***/ }),

/***/ "MGin":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router\");\n\n//# sourceURL=webpack:///external_%22react-router%22?");

/***/ }),

/***/ "NyTM":
/*!***********************************************!*\
  !*** ./src/client/router/loading-compoent.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LoadingComponent; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"cDcd\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n//等待组件加载 渲染的 loading组件\n\nfunction LoadingComponent(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"loading......\");\n}\n\n//# sourceURL=webpack:///./src/client/router/loading-compoent.js?");

/***/ }),

/***/ "Q8e5":
/*!***********************************************************!*\
  !*** ./node_modules/isomorphic-style-loader/insertCss.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */\n\n\n\nvar inserted = {};\n\nfunction b64EncodeUnicode(str) {\n  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {\n    return String.fromCharCode(\"0x\" + p1);\n  }));\n}\n\nfunction removeCss(ids) {\n  ids.forEach(function (id) {\n    if (--inserted[id] <= 0) {\n      var elem = document.getElementById(id);\n\n      if (elem) {\n        elem.parentNode.removeChild(elem);\n      }\n    }\n  });\n}\n\nfunction insertCss(styles, _temp) {\n  var _ref = _temp === void 0 ? {} : _temp,\n      _ref$replace = _ref.replace,\n      replace = _ref$replace === void 0 ? false : _ref$replace,\n      _ref$prepend = _ref.prepend,\n      prepend = _ref$prepend === void 0 ? false : _ref$prepend,\n      _ref$prefix = _ref.prefix,\n      prefix = _ref$prefix === void 0 ? 's' : _ref$prefix;\n\n  var ids = [];\n\n  for (var i = 0; i < styles.length; i++) {\n    var _styles$i = styles[i],\n        moduleId = _styles$i[0],\n        css = _styles$i[1],\n        media = _styles$i[2],\n        sourceMap = _styles$i[3];\n    var id = \"\" + prefix + moduleId + \"-\" + i;\n    ids.push(id);\n\n    if (inserted[id]) {\n      if (!replace) {\n        inserted[id]++;\n        continue;\n      }\n    }\n\n    inserted[id] = 1;\n    var elem = document.getElementById(id);\n    var create = false;\n\n    if (!elem) {\n      create = true;\n      elem = document.createElement('style');\n      elem.setAttribute('type', 'text/css');\n      elem.id = id;\n\n      if (media) {\n        elem.setAttribute('media', media);\n      }\n    }\n\n    var cssText = css;\n\n    if (sourceMap && typeof btoa === 'function') {\n      cssText += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + b64EncodeUnicode(JSON.stringify(sourceMap)) + \"*/\";\n      cssText += \"\\n/*# sourceURL=\" + sourceMap.file + \"?\" + id + \"*/\";\n    }\n\n    if ('textContent' in elem) {\n      elem.textContent = cssText;\n    } else {\n      elem.styleSheet.cssText = cssText;\n    }\n\n    if (create) {\n      if (prepend) {\n        document.head.insertBefore(elem, document.head.childNodes[0]);\n      } else {\n        document.head.appendChild(elem);\n      }\n    }\n  }\n\n  return removeCss.bind(null, ids);\n}\n\nmodule.exports = insertCss;\n//# sourceMappingURL=insertCss.js.map\n\n\n//# sourceURL=webpack:///./node_modules/isomorphic-style-loader/insertCss.js?");

/***/ }),

/***/ "Qs3B":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"assert\");\n\n//# sourceURL=webpack:///external_%22assert%22?");

/***/ }),

/***/ "Rj8S":
/*!************************************!*\
  !*** ./src/client/app/provider.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"cDcd\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _root_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./root-context */ \"UJWO\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// /src/client/app/provider.js\n//自定义 provider 组件\n//实现数据的跨组件传输\n\n\nclass Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props, context) {\n    super(props);\n\n    _defineProperty(this, \"changeContext\", data => {});\n  }\n\n  componentDidMount() {}\n\n  render() {\n    //使用了 provider 可以让消费者订阅变化，从而重新渲染\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_root_context__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Provider, {\n      value: this.props.initialData || {}\n    }, this.props.children);\n  }\n\n}\n\n//# sourceURL=webpack:///./src/client/app/provider.js?");

/***/ }),

/***/ "SEu5":
/*!************************************!*\
  !*** ./src/client/router/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app/layout */ \"XLCd\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"cDcd\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"oncg\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n// src/client/router/indxex.js\n//路由配置文件\n\n\n\n\nfunction App({\n  routeList\n}) {\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_app_layout__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Switch\"], null, routeList.map(item => {\n    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], _extends({\n      key: item.path\n    }, item));\n  })));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/client/router/index.js?");

/***/ }),

/***/ "TDGe":
/*!*******************************************!*\
  !*** ./src/client/router/route-config.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"cDcd\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _async_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./async-loader */ \"sJBc\");\n//路由配置文件\n //组件动态加载容器\n\n\n\nfunction pageNotFound() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"404\\u9875\\u9762\");\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  path: ['/', '/index'],\n  component: Object(_async_loader__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../pages/index */ \"RKbY\"))),\n  exact: true\n}, {\n  path: '/list',\n  component: Object(_async_loader__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(() => __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../pages/list */ \"cYME\"))),\n  exact: true\n}, {\n  path: '*',\n  component: pageNotFound,\n  exact: true\n}]);\n\n//# sourceURL=webpack:///./src/client/router/route-config.js?");

/***/ }),

/***/ "UJWO":
/*!****************************************!*\
  !*** ./src/client/app/root-context.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"cDcd\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n// /src/client/app/root-context.js\n//自定义 context 对象\n //默认为一个空对象，这代码几乎不需要后期维护\n\nconst RootContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});\n/* harmony default export */ __webpack_exports__[\"default\"] = (RootContext);\n\n//# sourceURL=webpack:///./src/client/app/root-context.js?");

/***/ }),

/***/ "ULIa":
/*!**********************************!*\
  !*** ./src/share/match-route.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router */ \"MGin\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_0__);\n// src/share/match-route.js\n//路由匹配，然后根据匹配的路由得到对应的组件\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((path, routeList) => {\n  let targetRoute, targetMatch;\n\n  for (var item of routeList) {\n    targetMatch = Object(react_router__WEBPACK_IMPORTED_MODULE_0__[\"matchPath\"])(path, item);\n\n    if (targetMatch) {\n      targetRoute = item; //查找到第一个路由后停止查找\n\n      break;\n    }\n  }\n\n  return {\n    targetRoute,\n    targetMatch\n  };\n});\n\n//# sourceURL=webpack:///./src/share/match-route.js?");

/***/ }),

/***/ "XLCd":
/*!**********************************!*\
  !*** ./src/client/app/layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"cDcd\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"oncg\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ \"MGin\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-loader/root */ \"+o4U\");\n/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-style-loader/withStyles */ \"lUbX\");\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _layout_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout.scss */ \"rf1X\");\n/* harmony import */ var _layout_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_layout_scss__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nclass Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"layout-box\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"koa+react+ssr\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n      to: \"/index\",\n      style: {\n        marginLeft: \"10px\"\n      }\n    }, \"\\u9996\\u9875\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n      style: {\n        marginLeft: \"10px\"\n      },\n      to: \"/list\"\n    }, \"\\u5217\\u8868\\u9875\"), this.props.children);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_4___default()(_layout_scss__WEBPACK_IMPORTED_MODULE_5___default.a)(Object(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_3__[\"hot\"])(Index)));\n\n//# sourceURL=webpack:///./src/client/app/layout.js?");

/***/ }),

/***/ "aZ3n":
/*!********************************************************************************!*\
  !*** /Users/zhangjiapeng/666/myfe/koa-react-ssr/node_modules/thenify/index.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar Promise = __webpack_require__(/*! any-promise */ \"cjpT\")\nvar assert = __webpack_require__(/*! assert */ \"Qs3B\")\n\nmodule.exports = thenify\n\n/**\n * Turn async functions into promises\n *\n * @param {Function} $$__fn__$$\n * @return {Function}\n * @api public\n */\n\nfunction thenify($$__fn__$$, options) {\n  assert(typeof $$__fn__$$ === 'function')\n  return eval(createWrapper($$__fn__$$.name, options))\n}\n\n/**\n * Turn async functions into promises and backward compatible with callback\n *\n * @param {Function} $$__fn__$$\n * @return {Function}\n * @api public\n */\n\nthenify.withCallback = function ($$__fn__$$, options) {\n  assert(typeof $$__fn__$$ === 'function')\n  options = options || {}\n  options.withCallback = true\n  if (options.multiArgs === undefined) options.multiArgs = true\n  return eval(createWrapper($$__fn__$$.name, options))\n}\n\nfunction createCallback(resolve, reject, multiArgs) {\n  return function(err, value) {\n    if (err) return reject(err)\n    var length = arguments.length\n\n    if (length <= 2 || !multiArgs) return resolve(value)\n\n    if (Array.isArray(multiArgs)) {\n      var values = {}\n      for (var i = 1; i < length; i++) values[multiArgs[i - 1]] = arguments[i]\n      return resolve(values)\n    }\n\n    var values = new Array(length - 1)\n    for (var i = 1; i < length; ++i) values[i - 1] = arguments[i]\n    resolve(values)\n  }\n}\n\nfunction createWrapper(name, options) {\n  name = (name || '').replace(/\\s|bound(?!$)/g, '')\n  options = options || {}\n  // default to true\n  var multiArgs = options.multiArgs !== undefined ? options.multiArgs : true\n  multiArgs = 'var multiArgs = ' + JSON.stringify(multiArgs) + '\\n'\n\n  var withCallback = options.withCallback ?\n    'var lastType = typeof arguments[len - 1]\\n'\n    + 'if (lastType === \"function\") return $$__fn__$$.apply(self, arguments)\\n'\n   : ''\n\n  return '(function ' + name + '() {\\n'\n    + 'var self = this\\n'\n    + 'var len = arguments.length\\n'\n    + multiArgs\n    + withCallback\n    + 'var args = new Array(len + 1)\\n'\n    + 'for (var i = 0; i < len; ++i) args[i] = arguments[i]\\n'\n    + 'var lastIndex = i\\n'\n    + 'return new Promise(function (resolve, reject) {\\n'\n      + 'args[lastIndex] = createCallback(resolve, reject, multiArgs)\\n'\n      + '$$__fn__$$.apply(self, args)\\n'\n    + '})\\n'\n  + '})'\n}\n\n\n//# sourceURL=webpack:////Users/zhangjiapeng/666/myfe/koa-react-ssr/node_modules/thenify/index.js?");

/***/ }),

/***/ "cDcd":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "cjpT":
/*!******************************!*\
  !*** external "any-promise" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"any-promise\");\n\n//# sourceURL=webpack:///external_%22any-promise%22?");

/***/ }),

/***/ "cs0u":
/*!***********************************************************************************!*\
  !*** /Users/zhangjiapeng/666/myfe/koa-react-ssr/node_modules/koa-static/index.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n\n/**\n * Module dependencies.\n */\n\nconst debug = __webpack_require__(/*! debug */ \"i4Cb\")('koa-static')\nconst { resolve } = __webpack_require__(/*! path */ \"oyvS\")\nconst assert = __webpack_require__(/*! assert */ \"Qs3B\")\nconst send = __webpack_require__(/*! koa-send */ \"INAJ\")\n\n/**\n * Expose `serve()`.\n */\n\nmodule.exports = serve\n\n/**\n * Serve static files from `root`.\n *\n * @param {String} root\n * @param {Object} [opts]\n * @return {Function}\n * @api public\n */\n\nfunction serve (root, opts) {\n  opts = Object.assign({}, opts)\n\n  assert(root, 'root directory is required to serve files')\n\n  // options\n  debug('static \"%s\" %j', root, opts)\n  opts.root = resolve(root)\n  if (opts.index !== false) opts.index = opts.index || 'index.html'\n\n  if (!opts.defer) {\n    return async function serve (ctx, next) {\n      let done = false\n\n      if (ctx.method === 'HEAD' || ctx.method === 'GET') {\n        try {\n          done = await send(ctx, ctx.path, opts)\n        } catch (err) {\n          if (err.status !== 404) {\n            throw err\n          }\n        }\n      }\n\n      if (!done) {\n        await next()\n      }\n    }\n  }\n\n  return async function serve (ctx, next) {\n    await next()\n\n    if (ctx.method !== 'HEAD' && ctx.method !== 'GET') return\n    // response is already handled\n    if (ctx.body != null || ctx.status !== 404) return // eslint-disable-line\n\n    try {\n      await send(ctx, ctx.path, opts)\n    } catch (err) {\n      if (err.status !== 404) {\n        throw err\n      }\n    }\n  }\n}\n\n\n//# sourceURL=webpack:////Users/zhangjiapeng/666/myfe/koa-react-ssr/node_modules/koa-static/index.js?");

/***/ }),

/***/ "fk+k":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/postcss-loader/src!./node_modules/sass-loader/dist/cjs.js!./src/client/app/layout.scss ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"JPst\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"body {\\n  background-color: #f4f5f5; }\\n\\n.layout-box {\\n  max-width: 750px;\\n  margin: 0 auto;\\n  text-align: center;\\n  background: #fff; }\\n  .layout-box h1 {\\n    margin-top: 20px;\\n    margin-top: 20px; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/client/app/layout.scss?./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/postcss-loader/src!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "hSzU":
/*!***********************************!*\
  !*** external "path-is-absolute" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path-is-absolute\");\n\n//# sourceURL=webpack:///external_%22path-is-absolute%22?");

/***/ }),

/***/ "i4Cb":
/*!************************!*\
  !*** external "debug" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"debug\");\n\n//# sourceURL=webpack:///external_%22debug%22?");

/***/ }),

/***/ "iURj":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "iiSy":
/*!*************************************!*\
  !*** ./src/server/common/assets.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// src/server/common/assets.js\n//生产环境中 静态资源的处理\nmodule.exports = function () {\n  //let devHost = '//localhost:9001';\n  let devHost = '//localhost:9002';\n  let jsFiles = ['libs.js', 'main.js', 'styles.js'];\n  let cssFiles = ['styles.css'];\n  const assets = {\n    js: [],\n    css: []\n  };\n\n  if (true) {\n    //开发环境\n    assets.js.push(`<script type=\"text/javascript\"  src=\"${devHost}/libs.js\"></script>`);\n    assets.js.push(`<script type=\"text/javascript\"  src=\"${devHost}/main.js\"></script>`);\n    assets.js.push(`<script type=\"text/javascript\"  src=\"${devHost}/styles.js\"></script>`);\n    assets.css.push(`<link rel=\"stylesheet\" type=\"text/css\" href=\"${devHost}/styles.css\" />`);\n  } else {}\n\n  return assets;\n};\n\n//# sourceURL=webpack:///./src/server/common/assets.js?");

/***/ }),

/***/ "kEd6":
/*!*************************************************************************************!*\
  !*** /Users/zhangjiapeng/666/myfe/koa-react-ssr/node_modules/resolve-path/index.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*!\n * resolve-path\n * Copyright(c) 2014 Jonathan Ong\n * Copyright(c) 2015-2018 Douglas Christopher Wilson\n * MIT Licensed\n */\n\n\n\n/**\n * Module dependencies.\n * @private\n */\n\nvar createError = __webpack_require__(/*! http-errors */ \"4Hsq\")\nvar join = __webpack_require__(/*! path */ \"oyvS\").join\nvar normalize = __webpack_require__(/*! path */ \"oyvS\").normalize\nvar pathIsAbsolute = __webpack_require__(/*! path-is-absolute */ \"hSzU\")\nvar resolve = __webpack_require__(/*! path */ \"oyvS\").resolve\nvar sep = __webpack_require__(/*! path */ \"oyvS\").sep\n\n/**\n * Module exports.\n * @public\n */\n\nmodule.exports = resolvePath\n\n/**\n * Module variables.\n * @private\n */\n\nvar UP_PATH_REGEXP = /(?:^|[\\\\/])\\.\\.(?:[\\\\/]|$)/\n\n/**\n * Resolve relative path against a root path\n *\n * @param {string} rootPath\n * @param {string} relativePath\n * @return {string}\n * @public\n */\n\nfunction resolvePath (rootPath, relativePath) {\n  var path = relativePath\n  var root = rootPath\n\n  // root is optional, similar to root.resolve\n  if (arguments.length === 1) {\n    path = rootPath\n    root = process.cwd()\n  }\n\n  if (root == null) {\n    throw new TypeError('argument rootPath is required')\n  }\n\n  if (typeof root !== 'string') {\n    throw new TypeError('argument rootPath must be a string')\n  }\n\n  if (path == null) {\n    throw new TypeError('argument relativePath is required')\n  }\n\n  if (typeof path !== 'string') {\n    throw new TypeError('argument relativePath must be a string')\n  }\n\n  // containing NULL bytes is malicious\n  if (path.indexOf('\\0') !== -1) {\n    throw createError(400, 'Malicious Path')\n  }\n\n  // path should never be absolute\n  if (pathIsAbsolute.posix(path) || pathIsAbsolute.win32(path)) {\n    throw createError(400, 'Malicious Path')\n  }\n\n  // path outside root\n  if (UP_PATH_REGEXP.test(normalize('.' + sep + path))) {\n    throw createError(403)\n  }\n\n  // join the relative path\n  return normalize(join(resolve(root), path))\n}\n\n\n//# sourceURL=webpack:////Users/zhangjiapeng/666/myfe/koa-react-ssr/node_modules/resolve-path/index.js?");

/***/ }),

/***/ "lUbX":
/*!*****************************************************!*\
  !*** external "isomorphic-style-loader/withStyles" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-style-loader/withStyles\");\n\n//# sourceURL=webpack:///external_%22isomorphic-style-loader/withStyles%22?");

/***/ }),

/***/ "mw/K":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "oncg":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "oyvS":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "pnsS":
/*!************************************************************************!*\
  !*** /Users/zhangjiapeng/666/myfe/koa-react-ssr/node_modules/mz/fs.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar Promise = __webpack_require__(/*! any-promise */ \"cjpT\")\nvar fs\ntry {\n  fs = __webpack_require__(/*! graceful-fs */ \"6ndv\")\n} catch(err) {\n  fs = __webpack_require__(/*! fs */ \"mw/K\")\n}\n\nvar api = [\n  'appendFile',\n  'chmod',\n  'chown',\n  'close',\n  'fchmod',\n  'fchown',\n  'fdatasync',\n  'fstat',\n  'fsync',\n  'ftruncate',\n  'futimes',\n  'lchown',\n  'link',\n  'lstat',\n  'mkdir',\n  'open',\n  'read',\n  'readFile',\n  'readdir',\n  'readlink',\n  'realpath',\n  'rename',\n  'rmdir',\n  'stat',\n  'symlink',\n  'truncate',\n  'unlink',\n  'utimes',\n  'write',\n  'writeFile'\n]\n\ntypeof fs.access === 'function' && api.push('access')\ntypeof fs.copyFile === 'function' && api.push('copyFile')\ntypeof fs.mkdtemp === 'function' && api.push('mkdtemp')\n\n__webpack_require__(/*! thenify-all */ \"qRi8\").withCallback(fs, exports, api)\n\nexports.exists = function (filename, callback) {\n  // callback\n  if (typeof callback === 'function') {\n    return fs.stat(filename, function (err) {\n      callback(null, !err);\n    })\n  }\n  // or promise\n  return new Promise(function (resolve) {\n    fs.stat(filename, function (err) {\n      resolve(!err)\n    })\n  })\n}\n\n\n//# sourceURL=webpack:////Users/zhangjiapeng/666/myfe/koa-react-ssr/node_modules/mz/fs.js?");

/***/ }),

/***/ "qRi8":
/*!************************************************************************************!*\
  !*** /Users/zhangjiapeng/666/myfe/koa-react-ssr/node_modules/thenify-all/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar thenify = __webpack_require__(/*! thenify */ \"aZ3n\")\n\nmodule.exports = thenifyAll\nthenifyAll.withCallback = withCallback\nthenifyAll.thenify = thenify\n\n/**\n * Promisifies all the selected functions in an object.\n *\n * @param {Object} source the source object for the async functions\n * @param {Object} [destination] the destination to set all the promisified methods\n * @param {Array} [methods] an array of method names of `source`\n * @return {Object}\n * @api public\n */\n\nfunction thenifyAll(source, destination, methods) {\n  return promisifyAll(source, destination, methods, thenify)\n}\n\n/**\n * Promisifies all the selected functions in an object and backward compatible with callback.\n *\n * @param {Object} source the source object for the async functions\n * @param {Object} [destination] the destination to set all the promisified methods\n * @param {Array} [methods] an array of method names of `source`\n * @return {Object}\n * @api public\n */\n\nfunction withCallback(source, destination, methods) {\n  return promisifyAll(source, destination, methods, thenify.withCallback)\n}\n\nfunction promisifyAll(source, destination, methods, promisify) {\n  if (!destination) {\n    destination = {};\n    methods = Object.keys(source)\n  }\n\n  if (Array.isArray(destination)) {\n    methods = destination\n    destination = {}\n  }\n\n  if (!methods) {\n    methods = Object.keys(source)\n  }\n\n  if (typeof source === 'function') destination = promisify(source)\n\n  methods.forEach(function (name) {\n    // promisify only if it's a function\n    if (typeof source[name] === 'function') destination[name] = promisify(source[name])\n  })\n\n  // proxy the rest\n  Object.keys(source).forEach(function (name) {\n    if (deprecated(source, name)) return\n    if (destination[name]) return\n    destination[name] = source[name]\n  })\n\n  return destination\n}\n\nfunction deprecated(source, name) {\n  var desc = Object.getOwnPropertyDescriptor(source, name)\n  if (!desc || !desc.get) return false\n  if (desc.get.name === 'deprecated') return true\n  return false\n}\n\n\n//# sourceURL=webpack:////Users/zhangjiapeng/666/myfe/koa-react-ssr/node_modules/thenify-all/index.js?");

/***/ }),

/***/ "rf1X":
/*!************************************!*\
  !*** ./src/client/app/layout.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/postcss-loader/src!../../../node_modules/sass-loader/dist/cjs.js!./layout.scss */ \"fk+k\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/insertCss.js */ \"Q8e5\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/client/app/layout.scss?");

/***/ }),

/***/ "sJBc":
/*!*******************************************!*\
  !*** ./src/client/router/async-loader.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _async_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./async-bundle */ \"DU5p\");\n/* harmony import */ var _share_pro_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../share/pro-config */ \"M0Vd\");\n/* harmony import */ var _share_pro_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_share_pro_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"cDcd\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n//异步加载组件的高阶函数\n\n\n\n\nfunction AsyncLoader(loader) {\n  function asyncFn(props) {\n    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_async_bundle__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n      load: loader\n    }, Comp => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Comp, props));\n  } //标记为异步组件\n\n\n  asyncFn[_share_pro_config__WEBPACK_IMPORTED_MODULE_1___default.a.asyncComponentKey] = true;\n  return asyncFn;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AsyncLoader);\n\n//# sourceURL=webpack:///./src/client/router/async-loader.js?");

/***/ }),

/***/ "vAnj":
/*!***********************!*\
  !*** external "koa2" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa2\");\n\n//# sourceURL=webpack:///external_%22koa2%22?");

/***/ }),

/***/ "wnQA":
/*!************************************************!*\
  !*** ./src/server/common/get-static-routes.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _share_pro_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../share/pro-config */ \"M0Vd\");\n/* harmony import */ var _share_pro_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_share_pro_config__WEBPACK_IMPORTED_MODULE_0__);\n//路由静态化处理\n\n\nconst checkIsAsyncRoute = component => {\n  return component && component[_share_pro_config__WEBPACK_IMPORTED_MODULE_0___default.a.asyncComponentKey];\n}; //将路由转换为静态路由\n\n\nasync function getStaticRoutes(routes) {\n  const key = '__dynamics_route_to_static';\n\n  if (global[key]) {\n    console.log('cache route');\n    return global[key];\n  }\n\n  let len = routes.length,\n      i = 0;\n  const staticRoutes = [];\n\n  for (; i < len; i++) {\n    let item = routes[i];\n\n    if (checkIsAsyncRoute(item.component)) {\n      staticRoutes.push({ ...item,\n        ...{\n          component: (await item.component().props.load()).default\n        }\n      });\n    } else {\n      staticRoutes.push({ ...item\n      });\n    }\n  }\n\n  global[key] = staticRoutes;\n  return staticRoutes; //返回静态路由\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getStaticRoutes);\n\n//# sourceURL=webpack:///./src/server/common/get-static-routes.js?");

/***/ })

/******/ });