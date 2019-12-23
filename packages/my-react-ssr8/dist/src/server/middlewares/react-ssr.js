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

var _provider = _interopRequireDefault(require("../../client/app/provider"));

var _index = _interopRequireDefault(require("../../client/router/index"));

var _reactHelmet = require("react-helmet");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// /src/server/middlewares/react-ssr.js
//完成 react ssr 工作的中间件
//引入Index 组件
//如果有 layout 组件，也需要一起转换为 html
//自定义 provider 用来传递数据
const getAssets = require('../common/assets'); //根据请求 path 查找组件


const findRouteByPath = opt => {
  let {
    path
  } = opt;
  let Component;

  for (var item of _routeConfig.default) {
    if ((0, _reactRouter.matchPath)(path, item)) {
      Component = item.component;
      break;
    }
  }

  return Component;
};

var _default = async (ctx, next) => {
  const path = ctx.request.path;

  if (/.(ico|jpg|png|gif)/.test(path)) {
    return next();
  }

  console.log('ctx.request.path', ctx.request.path); //静态资源

  const assetsMap = getAssets();
  let Component = findRouteByPath({
    path
  });

  if (!Component) {
    Component = function Not() {
      return _react.default.createElement("div", null, "404 page");
    };
  } //得到数据


  let fetchDataFn = Component.getInitialProps;
  let fetchResult = null;

  if (fetchDataFn) {
    fetchResult = await fetchDataFn();
  } //数据传入组件，通过react context 特性传入


  let context = {};
  let {
    page
  } = fetchResult || {};
  let tdk = {
    title: '默认标题',
    keywords: '默认关键词',
    description: '默认描述'
  };

  if (page && page.tdk) {
    tdk = page.tdk;
  }

  const html = (0, _server.renderToString)(_react.default.createElement(_provider.default, {
    initialData: fetchResult || {}
  }, _react.default.createElement(_reactRouter.StaticRouter, {
    location: path,
    context: context
  }, _react.default.createElement(_index.default, null))));

  const helmet = _reactHelmet.Helmet.renderStatic();

  ctx.body = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
    ${assetsMap.css.join('')}
</head>
<body>
    <div id="root">
       ${html}
    </div>
    <textarea id="ssrTextInitData" style="display:none;">
    ${JSON.stringify(fetchResult)}
    </textarea>
</body>
</html>
</body>
 ${assetsMap.js.join('')}
`;
  await next();
};

exports.default = _default;
