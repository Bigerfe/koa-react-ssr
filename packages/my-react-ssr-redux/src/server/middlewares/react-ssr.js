// /src/server/middlewares/react-ssr.js

//完成 react ssr 工作的中间件
//引入Index 组件
import React from 'react';
import { renderToString } from 'react-dom/server';

import { StaticRouter, Route, matchPath } from 'react-router';
import { renderRoutes } from 'react-router-config';

import Layout from '../../client/app/layout';//如果有 layout 组件，也需要一起转换为 html
import routeList from '../../client/router/route-config';


import matchRoute from '../../share/match-route';

import App from '../../client/router/index';

import getStaticRoutes from '../common/get-static-routes';
//css 同构的上下文
import StyleContext from 'isomorphic-style-loader/StyleContext';
const getAssets = require('../common/assets');



import { Provider } from "react-redux";
import getStore from '../../share/redux/store';


export default async (ctx, next) => {

  
    const path = ctx.request.path;

    if (path.indexOf('.') > -1) {
        ctx.body = null;
        return next();
    }

    console.log('ctx.request.path', ctx.request.path);

    //获得静态路由
    const staticRoutesList = await getStaticRoutes(routeList);


    //查找到的目标路由对象
    let matchResult = await matchRoute(path, staticRoutesList);
    let { targetRoute, targetMatch } = matchResult;

    const store = getStore();

    //得到数据
    let fetchDataFn,fetchResult={};
    if (targetRoute){
        fetchDataFn = targetRoute.component ?targetRoute.component.getInitialProps:null;
        if (fetchDataFn) {
            fetchResult = await fetchDataFn({store});//更新 state 
        }
    }

    let { page } = fetchResult || {};

    //TODO:/这里tdk 就获取不到了
    

    let tdk = {
        title: '默认标题 - koa+react+ssr',
        keywords: '默认关键词',
        description: '默认描述'
    };

    if (page && page.tdk) {
        tdk = page.tdk;
    }

    const context = {};
    const css = new Set() // CSS for all rendered React components
    const insertCss = (...styles) => styles.forEach(style => css.add(style._getContent()));
   

    const html = renderToString(<Provider store={store}><StaticRouter location={path} context={context}>
        <StyleContext.Provider value={{ insertCss }} >
            <App routeList={staticRoutesList}></App></StyleContext.Provider>
    </StaticRouter></Provider>);

    const styles = [];
    [...css].forEach(item => {
        let [mid, content] = item[0];
        styles.push(`<style id="s${mid}-0">${content}</style>`)
    });

    //静态资源
    const assetsMap = getAssets();

    ctx.body = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>${tdk.title}</title>
    <meta name="keywords" content="${tdk.keywords}" />
    <meta name="description" content="${tdk.description}" />
    ${styles.join('')}
</head>
<body>
    <div id="root">
       ${html}
    </div>
    <textarea id="ssrTextInitData" style="display:none;">
    ${JSON.stringify(store.getState())}
    </textarea>
</body>
</html>
 ${assetsMap.js.join('')}
`;

    await next();
}