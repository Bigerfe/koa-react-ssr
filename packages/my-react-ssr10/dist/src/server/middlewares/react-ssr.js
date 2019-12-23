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

var _proConfig = _interopRequireDefault(require("../../share/pro-config"));

var _matchComponent = _interopRequireDefault(require("../../share/match-component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// /src/server/middlewares/react-ssr.js
//完成 react ssr 工作的中间件
//引入Index 组件
//如果有 layout 组件，也需要一起转换为 html
//自定义 provider 用来传递数据
//路由匹配,得到对应的组件
const getAssets = require('../common/assets'); //判断是否是按需加载的组件


const checkIsAsyncRoute = component => {
  console.log('component.name', component[_proConfig.default.asyncComponentKey]);
  return component[_proConfig.default.asyncComponentKey];
}; //将路由转换为静态路由


async function getStaticRoutes(routes) {
  let len = routes.length,
      i = 0;
  const staticRoutes = [];

  for (; i < len; i++) {
    let item = routes[i];

    if (checkIsAsyncRoute(item.component)) {
      staticRoutes.push({ ...item,
        ...{
          component: (await item.component().props.load()).default
        }
      });
    } else {
      staticRoutes.push({ ...item
      });
    }
  }

  return staticRoutes; //返回静态路由
}

var _default = async (ctx, next) => {
  const path = ctx.request.path;

  if (/.(ico|jpg|png|gif)/.test(path)) {
    return next();
  }

  console.log('ctx.request.path', ctx.request.path); //静态资源

  const assetsMap = getAssets();
  const staticRoutesList = await getStaticRoutes(_routeConfig.default);
  let Component = await (0, _matchComponent.default)({
    path
  }, staticRoutesList);

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
  } // - <StaticRouter location={path} context={context}><App></App></StaticRouter>


  const html = (0, _server.renderToString)(_react.default.createElement(_provider.default, {
    initialData: fetchResult || {}
  }, _react.default.createElement(_reactRouter.StaticRouter, {
    location: path,
    context: context
  }, _react.default.createElement(_index.default, {
    routeList: staticRoutesList
  }))));

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