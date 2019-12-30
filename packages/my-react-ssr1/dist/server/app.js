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

/***/ "./src/client/pages/index/index.js":
/*!*****************************************!*\
  !*** ./src/client/pages/index/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n//src/client/pages/index/index.js\n//index 组件\n //组件\n\nclass Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n  }\n\n  handlerClick() {\n    alert('一起来玩 react 服务端渲染..');\n  }\n\n  render() {\n    const str = 'hello,world.';\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      onClick: this.handlerClick\n    }, str);\n  }\n\n}\n\n//# sourceURL=webpack:///./src/client/pages/index/index.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _client_pages_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../client/pages/index */ \"./src/client/pages/index/index.js\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);\n// /src/server/middlewares/react-ssr.js\n//完成 react ssr 工作的中间件\n//引入Index 组件\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((ctx, next) => {\n  console.log('ctx.request.path', ctx.request.path);\n  console.log('ctx.request.url', ctx.request.url);\n  const html = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_2__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_client_pages_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null));\n  ctx.body = `<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>my react ssr</title>\n</head>\n<body>\n    <div id=\"root\">\n       ${html} <span>测试内容</span>\n    </div>\n</body>\n</html>\n</body>\n<script type=\"text/javascript\"  src=\"index.js\"></script>\n`;\n  return next();\n});\n\n//# sourceURL=webpack:///./src/server/middlewares/react-ssr.js?");

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

/***/ })

/******/ });