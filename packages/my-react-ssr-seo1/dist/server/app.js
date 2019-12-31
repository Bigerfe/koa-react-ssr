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

/***/ "../../node_modules/koa-send/index.js":
/*!*********************************************************************************!*\
  !*** /Users/zhangjiapeng/666/myfe/koa-react-ssr/node_modules/koa-send/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * Module dependencies.\n */\n\nconst debug = __webpack_require__(/*! debug */ \"debug\")('koa-send')\nconst resolvePath = __webpack_require__(/*! resolve-path */ \"../../node_modules/resolve-path/index.js\")\nconst createError = __webpack_require__(/*! http-errors */ \"http-errors\")\nconst assert = __webpack_require__(/*! assert */ \"assert\")\nconst fs = __webpack_require__(/*! mz/fs */ \"../../node_modules/mz/fs.js\")\n\nconst {\n  normalize,\n  basename,\n  extname,\n  resolve,\n  parse,\n  sep\n} = __webpack_require__(/*! path */ \"path\")\n\n/**\n * Expose `send()`.\n */\n\nmodule.exports = send\n\n/**\n * Send file at `path` with the\n * given `options` to the koa `ctx`.\n *\n * @param {Context} ctx\n * @param {String} path\n * @param {Object} [opts]\n * @return {Function}\n * @api public\n */\n\nasync function send (ctx, path, opts = {}) {\n  assert(ctx, 'koa context required')\n  assert(path, 'pathname required')\n\n  // options\n  debug('send \"%s\" %j', path, opts)\n  const root = opts.root ? normalize(resolve(opts.root)) : ''\n  const trailingSlash = path[path.length - 1] === '/'\n  path = path.substr(parse(path).root.length)\n  const index = opts.index\n  const maxage = opts.maxage || opts.maxAge || 0\n  const immutable = opts.immutable || false\n  const hidden = opts.hidden || false\n  const format = opts.format !== false\n  const extensions = Array.isArray(opts.extensions) ? opts.extensions : false\n  const brotli = opts.brotli !== false\n  const gzip = opts.gzip !== false\n  const setHeaders = opts.setHeaders\n\n  if (setHeaders && typeof setHeaders !== 'function') {\n    throw new TypeError('option setHeaders must be function')\n  }\n\n  // normalize path\n  path = decode(path)\n\n  if (path === -1) return ctx.throw(400, 'failed to decode')\n\n  // index file support\n  if (index && trailingSlash) path += index\n\n  path = resolvePath(root, path)\n\n  // hidden file support, ignore\n  if (!hidden && isHidden(root, path)) return\n\n  let encodingExt = ''\n  // serve brotli file when possible otherwise gzipped file when possible\n  if (ctx.acceptsEncodings('br', 'identity') === 'br' && brotli && (await fs.exists(path + '.br'))) {\n    path = path + '.br'\n    ctx.set('Content-Encoding', 'br')\n    ctx.res.removeHeader('Content-Length')\n    encodingExt = '.br'\n  } else if (ctx.acceptsEncodings('gzip', 'identity') === 'gzip' && gzip && (await fs.exists(path + '.gz'))) {\n    path = path + '.gz'\n    ctx.set('Content-Encoding', 'gzip')\n    ctx.res.removeHeader('Content-Length')\n    encodingExt = '.gz'\n  }\n\n  if (extensions && !/\\.[^/]*$/.exec(path)) {\n    const list = [].concat(extensions)\n    for (let i = 0; i < list.length; i++) {\n      let ext = list[i]\n      if (typeof ext !== 'string') {\n        throw new TypeError('option extensions must be array of strings or false')\n      }\n      if (!/^\\./.exec(ext)) ext = '.' + ext\n      if (await fs.exists(path + ext)) {\n        path = path + ext\n        break\n      }\n    }\n  }\n\n  // stat\n  let stats\n  try {\n    stats = await fs.stat(path)\n\n    // Format the path to serve static file servers\n    // and not require a trailing slash for directories,\n    // so that you can do both `/directory` and `/directory/`\n    if (stats.isDirectory()) {\n      if (format && index) {\n        path += '/' + index\n        stats = await fs.stat(path)\n      } else {\n        return\n      }\n    }\n  } catch (err) {\n    const notfound = ['ENOENT', 'ENAMETOOLONG', 'ENOTDIR']\n    if (notfound.includes(err.code)) {\n      throw createError(404, err)\n    }\n    err.status = 500\n    throw err\n  }\n\n  if (setHeaders) setHeaders(ctx.res, path, stats)\n\n  // stream\n  ctx.set('Content-Length', stats.size)\n  if (!ctx.response.get('Last-Modified')) ctx.set('Last-Modified', stats.mtime.toUTCString())\n  if (!ctx.response.get('Cache-Control')) {\n    const directives = ['max-age=' + (maxage / 1000 | 0)]\n    if (immutable) {\n      directives.push('immutable')\n    }\n    ctx.set('Cache-Control', directives.join(','))\n  }\n  if (!ctx.type) ctx.type = type(path, encodingExt)\n  ctx.body = fs.createReadStream(path)\n\n  return path\n}\n\n/**\n * Check if it's hidden.\n */\n\nfunction isHidden (root, path) {\n  path = path.substr(root.length).split(sep)\n  for (let i = 0; i < path.length; i++) {\n    if (path[i][0] === '.') return true\n  }\n  return false\n}\n\n/**\n * File type.\n */\n\nfunction type (file, ext) {\n  return ext !== '' ? extname(basename(file, ext)) : extname(file)\n}\n\n/**\n * Decode `path`.\n */\n\nfunction decode (path) {\n  try {\n    return decodeURIComponent(path)\n  } catch (err) {\n    return -1\n  }\n}\n\n\n//# sourceURL=webpack:////Users/zhangjiapeng/666/myfe/koa-react-ssr/node_modules/koa-send/index.js?");

/***/ }),

/***/ "../../node_modules/koa-static/index.js":
/*!***********************************************************************************!*\
  !*** /Users/zhangjiapeng/666/myfe/koa-react-ssr/node_modules/koa-static/index.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n\n/**\n * Module dependencies.\n */\n\nconst debug = __webpack_require__(/*! debug */ \"debug\")('koa-static')\nconst { resolve } = __webpack_require__(/*! path */ \"path\")\nconst assert = __webpack_require__(/*! assert */ \"assert\")\nconst send = __webpack_require__(/*! koa-send */ \"../../node_modules/koa-send/index.js\")\n\n/**\n * Expose `serve()`.\n */\n\nmodule.exports = serve\n\n/**\n * Serve static files from `root`.\n *\n * @param {String} root\n * @param {Object} [opts]\n * @return {Function}\n * @api public\n */\n\nfunction serve (root, opts) {\n  opts = Object.assign({}, opts)\n\n  assert(root, 'root directory is required to serve files')\n\n  // options\n  debug('static \"%s\" %j', root, opts)\n  opts.root = resolve(root)\n  if (opts.index !== false) opts.index = opts.index || 'index.html'\n\n  if (!opts.defer) {\n    return async function serve (ctx, next) {\n      let done = false\n\n      if (ctx.method === 'HEAD' || ctx.method === 'GET') {\n        try {\n          done = await send(ctx, ctx.path, opts)\n        } catch (err) {\n          if (err.status !== 404) {\n            throw err\n          }\n        }\n      }\n\n      if (!done) {\n        await next()\n      }\n    }\n  }\n\n  return async function serve (ctx, next) {\n    await next()\n\n    if (ctx.method !== 'HEAD' && ctx.method !== 'GET') return\n    // response is already handled\n    if (ctx.body != null || ctx.status !== 404) return // eslint-disable-line\n\n    try {\n      await send(ctx, ctx.path, opts)\n    } catch (err) {\n      if (err.status !== 404) {\n        throw err\n      }\n    }\n  }\n}\n\n\n//# sourceURL=webpack:////Users/zhangjiapeng/666/myfe/koa-react-ssr/node_modules/koa-static/index.js?");

/***/ }),

/***/ "../../node_modules/mz/fs.js":
/*!************************************************************************!*\
  !*** /Users/zhangjiapeng/666/myfe/koa-react-ssr/node_modules/mz/fs.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar Promise = __webpack_require__(/*! any-promise */ \"any-promise\")\nvar fs\ntry {\n  fs = __webpack_require__(/*! graceful-fs */ \"graceful-fs\")\n} catch(err) {\n  fs = __webpack_require__(/*! fs */ \"fs\")\n}\n\nvar api = [\n  'appendFile',\n  'chmod',\n  'chown',\n  'close',\n  'fchmod',\n  'fchown',\n  'fdatasync',\n  'fstat',\n  'fsync',\n  'ftruncate',\n  'futimes',\n  'lchown',\n  'link',\n  'lstat',\n  'mkdir',\n  'open',\n  'read',\n  'readFile',\n  'readdir',\n  'readlink',\n  'realpath',\n  'rename',\n  'rmdir',\n  'stat',\n  'symlink',\n  'truncate',\n  'unlink',\n  'utimes',\n  'write',\n  'writeFile'\n]\n\ntypeof fs.access === 'function' && api.push('access')\ntypeof fs.copyFile === 'function' && api.push('copyFile')\ntypeof fs.mkdtemp === 'function' && api.push('mkdtemp')\n\n__webpack_require__(/*! thenify-all */ \"../../node_modules/thenify-all/index.js\").withCallback(fs, exports, api)\n\nexports.exists = function (filename, callback) {\n  // callback\n  if (typeof callback === 'function') {\n    return fs.stat(filename, function (err) {\n      callback(null, !err);\n    })\n  }\n  // or promise\n  return new Promise(function (resolve) {\n    fs.stat(filename, function (err) {\n      resolve(!err)\n    })\n  })\n}\n\n\n//# sourceURL=webpack:////Users/zhangjiapeng/666/myfe/koa-react-ssr/node_modules/mz/fs.js?");

/***/ }),

/***/ "../../node_modules/resolve-path/index.js":
/*!*************************************************************************************!*\
  !*** /Users/zhangjiapeng/666/myfe/koa-react-ssr/node_modules/resolve-path/index.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*!\n * resolve-path\n * Copyright(c) 2014 Jonathan Ong\n * Copyright(c) 2015-2018 Douglas Christopher Wilson\n * MIT Licensed\n */\n\n\n\n/**\n * Module dependencies.\n * @private\n */\n\nvar createError = __webpack_require__(/*! http-errors */ \"http-errors\")\nvar join = __webpack_require__(/*! path */ \"path\").join\nvar normalize = __webpack_require__(/*! path */ \"path\").normalize\nvar pathIsAbsolute = __webpack_require__(/*! path-is-absolute */ \"path-is-absolute\")\nvar resolve = __webpack_require__(/*! path */ \"path\").resolve\nvar sep = __webpack_require__(/*! path */ \"path\").sep\n\n/**\n * Module exports.\n * @public\n */\n\nmodule.exports = resolvePath\n\n/**\n * Module variables.\n * @private\n */\n\nvar UP_PATH_REGEXP = /(?:^|[\\\\/])\\.\\.(?:[\\\\/]|$)/\n\n/**\n * Resolve relative path against a root path\n *\n * @param {string} rootPath\n * @param {string} relativePath\n * @return {string}\n * @public\n */\n\nfunction resolvePath (rootPath, relativePath) {\n  var path = relativePath\n  var root = rootPath\n\n  // root is optional, similar to root.resolve\n  if (arguments.length === 1) {\n    path = rootPath\n    root = process.cwd()\n  }\n\n  if (root == null) {\n    throw new TypeError('argument rootPath is required')\n  }\n\n  if (typeof root !== 'string') {\n    throw new TypeError('argument rootPath must be a string')\n  }\n\n  if (path == null) {\n    throw new TypeError('argument relativePath is required')\n  }\n\n  if (typeof path !== 'string') {\n    throw new TypeError('argument relativePath must be a string')\n  }\n\n  // containing NULL bytes is malicious\n  if (path.indexOf('\\0') !== -1) {\n    throw createError(400, 'Malicious Path')\n  }\n\n  // path should never be absolute\n  if (pathIsAbsolute.posix(path) || pathIsAbsolute.win32(path)) {\n    throw createError(400, 'Malicious Path')\n  }\n\n  // path outside root\n  if (UP_PATH_REGEXP.test(normalize('.' + sep + path))) {\n    throw createError(403)\n  }\n\n  // join the relative path\n  return normalize(join(resolve(root), path))\n}\n\n\n//# sourceURL=webpack:////Users/zhangjiapeng/666/myfe/koa-react-ssr/node_modules/resolve-path/index.js?");

/***/ }),

/***/ "../../node_modules/thenify-all/index.js":
/*!************************************************************************************!*\
  !*** /Users/zhangjiapeng/666/myfe/koa-react-ssr/node_modules/thenify-all/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar thenify = __webpack_require__(/*! thenify */ \"../../node_modules/thenify/index.js\")\n\nmodule.exports = thenifyAll\nthenifyAll.withCallback = withCallback\nthenifyAll.thenify = thenify\n\n/**\n * Promisifies all the selected functions in an object.\n *\n * @param {Object} source the source object for the async functions\n * @param {Object} [destination] the destination to set all the promisified methods\n * @param {Array} [methods] an array of method names of `source`\n * @return {Object}\n * @api public\n */\n\nfunction thenifyAll(source, destination, methods) {\n  return promisifyAll(source, destination, methods, thenify)\n}\n\n/**\n * Promisifies all the selected functions in an object and backward compatible with callback.\n *\n * @param {Object} source the source object for the async functions\n * @param {Object} [destination] the destination to set all the promisified methods\n * @param {Array} [methods] an array of method names of `source`\n * @return {Object}\n * @api public\n */\n\nfunction withCallback(source, destination, methods) {\n  return promisifyAll(source, destination, methods, thenify.withCallback)\n}\n\nfunction promisifyAll(source, destination, methods, promisify) {\n  if (!destination) {\n    destination = {};\n    methods = Object.keys(source)\n  }\n\n  if (Array.isArray(destination)) {\n    methods = destination\n    destination = {}\n  }\n\n  if (!methods) {\n    methods = Object.keys(source)\n  }\n\n  if (typeof source === 'function') destination = promisify(source)\n\n  methods.forEach(function (name) {\n    // promisify only if it's a function\n    if (typeof source[name] === 'function') destination[name] = promisify(source[name])\n  })\n\n  // proxy the rest\n  Object.keys(source).forEach(function (name) {\n    if (deprecated(source, name)) return\n    if (destination[name]) return\n    destination[name] = source[name]\n  })\n\n  return destination\n}\n\nfunction deprecated(source, name) {\n  var desc = Object.getOwnPropertyDescriptor(source, name)\n  if (!desc || !desc.get) return false\n  if (desc.get.name === 'deprecated') return true\n  return false\n}\n\n\n//# sourceURL=webpack:////Users/zhangjiapeng/666/myfe/koa-react-ssr/node_modules/thenify-all/index.js?");

/***/ }),

/***/ "../../node_modules/thenify/index.js":
/*!********************************************************************************!*\
  !*** /Users/zhangjiapeng/666/myfe/koa-react-ssr/node_modules/thenify/index.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar Promise = __webpack_require__(/*! any-promise */ \"any-promise\")\nvar assert = __webpack_require__(/*! assert */ \"assert\")\n\nmodule.exports = thenify\n\n/**\n * Turn async functions into promises\n *\n * @param {Function} $$__fn__$$\n * @return {Function}\n * @api public\n */\n\nfunction thenify($$__fn__$$, options) {\n  assert(typeof $$__fn__$$ === 'function')\n  return eval(createWrapper($$__fn__$$.name, options))\n}\n\n/**\n * Turn async functions into promises and backward compatible with callback\n *\n * @param {Function} $$__fn__$$\n * @return {Function}\n * @api public\n */\n\nthenify.withCallback = function ($$__fn__$$, options) {\n  assert(typeof $$__fn__$$ === 'function')\n  options = options || {}\n  options.withCallback = true\n  if (options.multiArgs === undefined) options.multiArgs = true\n  return eval(createWrapper($$__fn__$$.name, options))\n}\n\nfunction createCallback(resolve, reject, multiArgs) {\n  return function(err, value) {\n    if (err) return reject(err)\n    var length = arguments.length\n\n    if (length <= 2 || !multiArgs) return resolve(value)\n\n    if (Array.isArray(multiArgs)) {\n      var values = {}\n      for (var i = 1; i < length; i++) values[multiArgs[i - 1]] = arguments[i]\n      return resolve(values)\n    }\n\n    var values = new Array(length - 1)\n    for (var i = 1; i < length; ++i) values[i - 1] = arguments[i]\n    resolve(values)\n  }\n}\n\nfunction createWrapper(name, options) {\n  name = (name || '').replace(/\\s|bound(?!$)/g, '')\n  options = options || {}\n  // default to true\n  var multiArgs = options.multiArgs !== undefined ? options.multiArgs : true\n  multiArgs = 'var multiArgs = ' + JSON.stringify(multiArgs) + '\\n'\n\n  var withCallback = options.withCallback ?\n    'var lastType = typeof arguments[len - 1]\\n'\n    + 'if (lastType === \"function\") return $$__fn__$$.apply(self, arguments)\\n'\n   : ''\n\n  return '(function ' + name + '() {\\n'\n    + 'var self = this\\n'\n    + 'var len = arguments.length\\n'\n    + multiArgs\n    + withCallback\n    + 'var args = new Array(len + 1)\\n'\n    + 'for (var i = 0; i < len; ++i) args[i] = arguments[i]\\n'\n    + 'var lastIndex = i\\n'\n    + 'return new Promise(function (resolve, reject) {\\n'\n      + 'args[lastIndex] = createCallback(resolve, reject, multiArgs)\\n'\n      + '$$__fn__$$.apply(self, args)\\n'\n    + '})\\n'\n  + '})'\n}\n\n\n//# sourceURL=webpack:////Users/zhangjiapeng/666/myfe/koa-react-ssr/node_modules/thenify/index.js?");

/***/ }),

/***/ "./src/client/app/layout.js":
/*!**********************************!*\
  !*** ./src/client/app/layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nclass Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n      to: \"/index\",\n      style: {\n        marginLeft: \"10px\"\n      }\n    }, \"\\u9996\\u9875\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n      style: {\n        marginLeft: \"10px\"\n      },\n      to: \"/list\"\n    }, \"\\u5217\\u8868\\u9875\"), this.props.children);\n  }\n\n} //带入路由信息\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_2__[\"withRouter\"])(Index));\n\n//# sourceURL=webpack:///./src/client/app/layout.js?");

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

/***/ "./src/client/common/components/page-wrapper/index.js":
/*!************************************************************!*\
  !*** ./src/client/common/components/page-wrapper/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_root_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app/root-context */ \"./src/client/app/root-context.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SourceComponent => {\n  var _class, _temp;\n\n  let _this = null;\n\n  var popStateFn = function popStateFn() {\n    // 使用popStateFn保存函数防止addEventListener重复注册\n    if (_this && _this.getInitialProps) {\n      console.log('popStateFn');\n\n      _this.getInitialProps();\n    }\n  };\n\n  return _temp = _class = class NewComponent extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n    constructor(props, context) {\n      super(props);\n      this.state = {\n        fetchData: null,\n        page: null,\n        getProps: false //浏览器端是否需要请求数据\n\n      };\n      const getProps = props.history && props.history.action === 'PUSH';\n      console.log('getProps', getProps);\n    } //用于封装处理\n\n\n    async getInitialProps() {\n      // ssr首次进入页面以及csr/ssr切换路由时才调用组件的getInitialProps方法\n      const props = this.props;\n      const res = (await SourceComponent.getInitialProps) ? await SourceComponent.getInitialProps(props) : {};\n      this.setState({\n        initialData: res.fetchData || null,\n        page: res.page || {},\n        getProps: true\n      });\n      let {\n        tdk\n      } = res.page;\n\n      if (tdk) {\n        document.title = tdk.title;\n      }\n    }\n\n    async componentDidMount() {\n      _this = this; // 修正_this指向，保证_this指向当前渲染的页面组件\n\n      window.addEventListener('popstate', popStateFn); //注册事件，用于在页面回退的时候触发\n\n      const getProps = this.props.history && this.props.history.action === 'PUSH'; //路由跳转的时候可以异步请求数据\n\n      console.log('getProps', getProps);\n\n      if (getProps) {\n        await this.getInitialProps();\n      }\n    } //得到 context 对象\n\n\n    render() {\n      // 只有在首次进入页面需要将window.__INITIAL_DATA__作为props，路由切换时不需要\n      const data = {\n        fetchData: null,\n        page: null\n      };\n\n      if (this.state.getProps) {\n        data.fetchData = this.context.fetchData;\n        data.page = this.context.page;\n      }\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SourceComponent, data);\n    }\n\n  }, _defineProperty(_class, \"contextType\", _app_root_context__WEBPACK_IMPORTED_MODULE_2__[\"default\"]), _temp;\n});\n\n//# sourceURL=webpack:///./src/client/common/components/page-wrapper/index.js?");

/***/ }),

/***/ "./src/client/pages/index/index.js":
/*!*****************************************!*\
  !*** ./src/client/pages/index/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_components_page_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/components/page-wrapper */ \"./src/client/common/components/page-wrapper/index.js\");\n\n\n\nclass Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      page: props.initialData.page || {},\n      fetchData: props.initialData.fetchData\n    };\n  }\n\n  static async getInitialProps() {\n    return {\n      fetchData: null,\n      page: {\n        tdk: {\n          title: '首页',\n          keywords: '前端技术江湖',\n          description: '前端技术江湖'\n        }\n      }\n    };\n  } // componentDidMount() {\n  //     console.log(this.state.fetchData);\n  //     if (!this.state.fetchData) {\n  //         //如果没有数据，则进行数据请求\n  //         Index.getInitialProps().then(res => {\n  //             this.setState({\n  //                 fetchData: res.fetchData,\n  //                 page: res.page\n  //             });\n  //             let { tdk } = res.page;\n  //             if (tdk) {\n  //                 document.title = tdk.title;\n  //             }\n  //         })\n  //     }\n  // }\n\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"\\u9996\\u9875\");\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_common_components_page_wrapper__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Index));\n\n//# sourceURL=webpack:///./src/client/pages/index/index.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_root_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/root-context */ \"./src/client/app/root-context.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ \"./src/client/pages/list/data.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n//src/client/pages/list/index.js\n//index 组件\n\n\n\n //组件\n\nclass Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props, context) {\n    super(props, context);\n    console.log('list props', props); //context即为服务端返回的数据，数据通过 context 传递到组件里\n\n    this.state = {\n      page: context.page || {},\n      fetchData: context.fetchData\n    };\n  } //得到 context 对象\n\n\n  static async getInitialProps() {\n    console.log('fetch data'); //模拟数据请求方法\n\n    const fetchData = () => {\n      return new Promise(resolve => {\n        setTimeout(() => {\n          resolve({\n            code: 0,\n            data: _data__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n          });\n        }, 100);\n      });\n    };\n\n    let res = await fetchData();\n    return {\n      fetchData: res,\n      page: {\n        tdk: {\n          title: '列表页',\n          keywords: '前端技术江湖',\n          description: '前端技术江湖'\n        }\n      }\n    };\n  }\n\n  componentDidMount() {\n    if (!this.state.fetchData) {\n      //如果没有数据，则进行数据请求\n      Index.getInitialProps().then(res => {\n        this.setState({\n          fetchData: res.fetchData,\n          page: res.page\n        });\n        let {\n          tdk\n        } = this.state.page;\n\n        if (tdk) {\n          document.title = tdk.title;\n        }\n      });\n    }\n  }\n\n  render() {\n    //渲染数据\n    const {\n      code,\n      data\n    } = this.state.fetchData || {};\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, data && data.map((item, index) => {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        key: index\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, item.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, item.desc));\n    }), !data && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"\\u6682\\u65E0\\u6570\\u636E\"));\n  }\n\n}\n\n_defineProperty(Index, \"contextType\", _app_root_context__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n//# sourceURL=webpack:///./src/client/pages/list/index.js?");

/***/ }),

/***/ "./src/client/router/index.js":
/*!************************************!*\
  !*** ./src/client/router/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app/layout */ \"./src/client/app/layout.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n// src/client/router/indxex.js\n//路由配置文件\n\n\n\n\nfunction Page404() {\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, \"404\\u62C9 \");\n}\n\nfunction App({\n  routeList\n}) {\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_app_layout__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Switch\"], null, routeList.map(item => {\n    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], _extends({\n      key: item.path\n    }, item));\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n    to: \"*\",\n    component: Page404\n  })));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/client/router/index.js?");

/***/ }),

/***/ "./src/client/router/route-config.js":
/*!*******************************************!*\
  !*** ./src/client/router/route-config.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/index */ \"./src/client/pages/index/index.js\");\n/* harmony import */ var _pages_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/list */ \"./src/client/pages/list/index.js\");\n//路由配置文件\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  path: '/',\n  component: _pages_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  exact: true\n}, {\n  path: '/index',\n  component: _pages_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  exact: true\n}, {\n  path: '/list',\n  component: _pages_list__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  exact: true\n}]);\n\n//# sourceURL=webpack:///./src/client/router/route-config.js?");

/***/ }),

/***/ "./src/server/app/index.js":
/*!*********************************!*\
  !*** ./src/server/app/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _middlewares_react_ssr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../middlewares/react-ssr */ \"./src/server/middlewares/react-ssr.js\");\n/* harmony import */ var koa2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa2 */ \"koa2\");\n/* harmony import */ var koa2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa2__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! koa-static */ \"../../node_modules/koa-static/index.js\");\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(koa_static__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _share_pro_config_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../share/pro-config.js */ \"./src/share/pro-config.js\");\n/* harmony import */ var _share_pro_config_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_share_pro_config_js__WEBPACK_IMPORTED_MODULE_4__);\n//web 服务启动入口对象\n\n\n\n\n\nconst port = _share_pro_config_js__WEBPACK_IMPORTED_MODULE_4___default.a.nodeServerPort || process.env.PORT;\nconst app = new koa2__WEBPACK_IMPORTED_MODULE_1___default.a(); //设置可访问的静态资源\n\napp.use(koa_static__WEBPACK_IMPORTED_MODULE_2___default()('./dist/static')); //ssr 中间件\n\napp.use(_middlewares_react_ssr__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); //启动服务\n\napp.listen(port);\nconsole.log('server is start .', `http://localhost:${port}`);\n\n//# sourceURL=webpack:///./src/server/app/index.js?");

/***/ }),

/***/ "./src/server/middlewares/react-ssr.js":
/*!*********************************************!*\
  !*** ./src/server/middlewares/react-ssr.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _client_app_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../client/app/layout */ \"./src/client/app/layout.js\");\n/* harmony import */ var _client_router_route_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../client/router/route-config */ \"./src/client/router/route-config.js\");\n/* harmony import */ var _client_app_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../client/app/provider */ \"./src/client/app/provider.js\");\n/* harmony import */ var _client_router_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../client/router/index */ \"./src/client/router/index.js\");\n// /src/server/middlewares/react-ssr.js\n//完成 react ssr 工作的中间件\n//引入Index 组件\n\n\n\n\n //如果有 layout 组件，也需要一起转换为 html\n\n //自定义 provider 用来传递数据\n\n\n //根据请求 path 查找组件\n\nconst findRouteByPath = opt => {\n  let {\n    path\n  } = opt;\n  let Component;\n\n  for (var item of _client_router_route_config__WEBPACK_IMPORTED_MODULE_5__[\"default\"]) {\n    if (Object(react_router__WEBPACK_IMPORTED_MODULE_2__[\"matchPath\"])(path, item)) {\n      Component = item.component;\n      break;\n    }\n  }\n\n  return Component;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (ctx, next) => {\n  const path = ctx.request.path;\n\n  if (path.indexOf('.') > -1) {\n    ctx.body = null;\n    return next();\n  }\n\n  console.log('ctx.request.path', ctx.request.path);\n  let Component = findRouteByPath({\n    path\n  });\n\n  if (!Component) {\n    Component = function Not() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"404\");\n    };\n  } //得到数据\n\n\n  let fetchDataFn = Component.getInitialProps;\n  let fetchResult = {};\n\n  if (fetchDataFn) {\n    fetchResult = await fetchDataFn();\n  } //数据传入组件，通过react context 特性传入\n\n\n  let context = {};\n  let {\n    page\n  } = fetchResult || {};\n  let tdk = {\n    title: '默认标题 - my react ssr',\n    keywords: '默认关键词',\n    description: '默认描述'\n  };\n\n  if (page && page.tdk) {\n    tdk = page.tdk;\n  }\n\n  const html = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_client_app_provider__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    initialData: fetchResult\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__[\"StaticRouter\"], {\n    location: path,\n    context: context\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_client_router_index__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    routeList: _client_router_route_config__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  }))));\n  ctx.body = `<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>${tdk.title}</title>\n    <meta name=\"keywords\" content=\"${tdk.keywords}\" />\n    <meta name=\"description\" content=\"${tdk.description}\" />\n</head>\n<body>\n    <div id=\"root\">\n       ${html}\n    </div>\n    <textarea id=\"ssrTextInitData\" style=\"display:none;\">\n    ${JSON.stringify(fetchResult)}\n    </textarea>\n</body>\n</html>\n</body>\n<script type=\"text/javascript\"  src=\"/index.js\"></script>\n`;\n  await next();\n});\n\n//# sourceURL=webpack:///./src/server/middlewares/react-ssr.js?");

/***/ }),

/***/ "./src/share/pro-config.js":
/*!*********************************!*\
  !*** ./src/share/pro-config.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//双端公用的配置文件\nmodule.exports = {\n  wdsPort: 9002,\n  //wds 服务的运行端口\n  nodeServerPort: 9001,\n  //node server 的监听端口\n  asyncComponentKey: '__IS_ASYNC_COMP_FLAG__' //标志组件是否是按需加载 turn | false\n\n};\n\n//# sourceURL=webpack:///./src/share/pro-config.js?");

/***/ }),

/***/ "any-promise":
/*!******************************!*\
  !*** external "any-promise" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"any-promise\");\n\n//# sourceURL=webpack:///external_%22any-promise%22?");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"assert\");\n\n//# sourceURL=webpack:///external_%22assert%22?");

/***/ }),

/***/ "debug":
/*!************************!*\
  !*** external "debug" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"debug\");\n\n//# sourceURL=webpack:///external_%22debug%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "graceful-fs":
/*!******************************!*\
  !*** external "graceful-fs" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graceful-fs\");\n\n//# sourceURL=webpack:///external_%22graceful-fs%22?");

/***/ }),

/***/ "http-errors":
/*!******************************!*\
  !*** external "http-errors" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http-errors\");\n\n//# sourceURL=webpack:///external_%22http-errors%22?");

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

/***/ "path-is-absolute":
/*!***********************************!*\
  !*** external "path-is-absolute" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path-is-absolute\");\n\n//# sourceURL=webpack:///external_%22path-is-absolute%22?");

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