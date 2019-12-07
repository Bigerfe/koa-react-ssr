"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _reactRouter = require("react-router");

var _reactRouterConfig = require("react-router-config");

var _layout = _interopRequireDefault(require("../../client/app/layout"));

var _routeConfig = _interopRequireDefault(require("../../client/router/route-config"));

var _index = _interopRequireDefault(require("../../client/router/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// /src/server/middlewares/react-ssr.js
//完成 react ssr 工作的中间件
//引入Index 组件
//如果有 layout 组件，也需要一起转换为 html
//根据请求 path 查找组件
var findRouteByPath = function findRouteByPath(opt) {
  var path = opt.path;
  var Component;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = _routeConfig.default[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;

      if ((0, _reactRouter.matchPath)(path, item)) {
        Component = item.component;
        break;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return Component;
};

var _default = function _default(ctx, next) {
  console.log('ctx.request.path', ctx.request.path);
  var path = ctx.request.path;
  var Component = findRouteByPath({
    path: path
  });

  if (!Component) {
    Component = function Not() {
      return _react.default.createElement("div", null, "404");
    };
  }

  var context = {};
  var html = (0, _server.renderToString)(_react.default.createElement(_reactRouter.StaticRouter, {
    location: path,
    context: context
  }, _react.default.createElement(_index.default, null)));
  console.log(html);
  ctx.body = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>my react ssr</title>\n</head>\n<body>\n    <div id=\"root\">\n       ".concat(html, "\n    </div>\n</body>\n</html>\n</body>\n<script type=\"text/javascript\"  src=\"/index.js\"></script>\n");
  return next();
};

exports.default = _default;
