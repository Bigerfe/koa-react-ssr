// /src/server/middlewares/react-ssr.js

//完成 react ssr 工作的中间件
//引入Index 组件
import React from 'react';
import { renderToString } from 'react-dom/server';

import { StaticRouter, Route, matchPath } from 'react-router';
import { renderRoutes } from 'react-router-config';

import Layout from '../../client/app/layout';//如果有 layout 组件，也需要一起转换为 html
import routeList from '../../client/router/route-config';

//自定义 provider 用来传递数据
import Provider from '../../client/app/provider';

import matchRoute from '../../share/match-route';

import App from '../../client/router/index';

import getStaticRoutes from '../common/get-static-routes';

import proConfig from '../../share/pro-config';

const getAssets = require('../common/assets');


export default async (ctx, next) => {

    console.log(process.env.NODE_ENV);
    console.log(typeof process.env.NODE_ENV);
    console.log(__IS_PROD__);
    console.log(typeof __IS_PROD__);
    console.log('====');
    const path = ctx.request.path;

    if (path.indexOf('.') > -1) {
        ctx.body = null;
        return next();
    }

    console.log('ctx.request.path', ctx.request.path);

    let html='',//组件渲染结果
        fetchResult={},//属于预取结果
         tdk = {//tdk 默认值
            title: '默认标题 - my react ssr',
            keywords: '默认关键词',
            description: '默认描述'
        };

    if (proConfig.__IS_SSR__){
    //获得静态路由
    const staticRoutesList = await getStaticRoutes(routeList);


    //查找到的目标路由对象
    let matchResult = await matchRoute(path, staticRoutesList);
    let { targetRoute, targetMatch } = matchResult;


    //得到数据
    let fetchDataFn;
    if (targetRoute){
        fetchDataFn = targetRoute.component ?targetRoute.component.getInitialProps:null;
        if (fetchDataFn) {
            fetchResult = await fetchDataFn({match:targetMatch});
        }
    }


    let { page } = fetchResult || {};


    if (page && page.tdk) {
        tdk = page.tdk;
    }

    //将预取数据在这里传递过去 组内通过props.staticContext获取
    const context = {
        initialData: fetchResult
    };

    html = renderToString(<StaticRouter location={path} context={context}>
        <App routeList={staticRoutesList}></App>
    </StaticRouter>);
    }

    //静态资源
    const assetsMap = getAssets();

    ctx.body = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>${tdk.title}</title>
    <meta name="keywords" content="${tdk.keywords}" />
    <meta name="description" content="${tdk.description}" />
     ${assetsMap.css.join('')}
</head>
<body>
    <div id="root">${html}</div>
    <textarea id="ssrTextInitData" style="display:none;">${JSON.stringify(fetchResult)}</textarea>
</body>
</html>
<script>
window.__IS__SSR__=${proConfig.__IS_SSR__};
</script>
 ${assetsMap.js.join('')}
`;

    await next();
}