"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("../../client/pages/index"));

var _server = require("react-dom/server");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// /src/server/middlewares/react-ssr.js
//完成 react ssr 工作的中间件
//引入Index 组件
var _default = (ctx, next) => {
  console.log('ctx.request.path', ctx.request.path);
  console.log('ctx.request.url', ctx.request.url);
  const html = (0, _server.renderToString)(_react.default.createElement(_index.default, null));
  ctx.body = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>my react ssr</title>
</head>
<body>
    <div id="root">
       ${html} <span>测试内容</span>
    </div>
</body>
</html>
</body>
<script type="text/javascript"  src="index.js"></script>
`;
  return next();
};

exports.default = _default;