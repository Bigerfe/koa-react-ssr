// /src/server/middlewares/react-ssr.js

//完成 react ssr 工作的中间件
//引入Index 组件
import React from 'react';
import { renderToString } from 'react-dom/server';

import { StaticRouter, Route, matchPath,Switch} from 'react-router';
import { renderRoutes} from 'react-router-config';

import Layout from '../../client/app/layout';//如果有 layout 组件，也需要一起转换为 html
import routeList from '../../client/router/route-config';

//自定义 provider 用来传递数据
import Provider from '../../client/app/provider';

import App from '../../client/router/index';

import { Helmet } from 'react-helmet';

import proConfig from '../../share/pro-config';

//路由匹配,得到对应的组件
import matchComponent from '../../share/match-component';

const getAssets = require('../common/assets');

//判断是否是按需加载的组件
const checkIsAsyncRoute = (component) => {
    console.log('component.name', component[proConfig.asyncComponentKey]);
    return component[proConfig.asyncComponentKey];
}

//将路由转换为静态路由
async function getStaticRoutes(routes) {

    let len = routes.length,
        i = 0;
    const staticRoutes = [];

    for (; i < len; i++) {
        let item = routes[i];
        if (checkIsAsyncRoute(item.component)) {
            staticRoutes.push({
                ...item,
                ...{
                    component: (await item.component().props.load()).default
                }
            });
        } else {
            staticRoutes.push({
                ...item
            });
        }
    }
    return staticRoutes; //返回静态路由
}


export default  async (ctx,next)=>{

    const path = ctx.request.path;

    if(/.(ico|jpg|png|gif)/.test(path)){
        return next();
    }

    console.log('ctx.request.path', ctx.request.path);

    //静态资源
    const assetsMap = getAssets();

    const staticRoutesList =await getStaticRoutes(routeList);

    let Component = await matchComponent({
        path
    }, staticRoutesList);

    if (!Component){
        Component = function Not() {
            return <div>404 page</div>
        }
    }


    //得到数据
    let fetchDataFn = Component.getInitialProps;
    let fetchResult =null;
    if(fetchDataFn){
        fetchResult = await fetchDataFn();
    }

    //数据传入组件，通过react context 特性传入

    let context={};

    let { page } = fetchResult || {};
    let tdk = {
        title: '默认标题',
        keywords: '默认关键词',
        description: '默认描述'};

    if(page && page.tdk){
        tdk=page.tdk;
    }
   
    // - <StaticRouter location={path} context={context}><App></App></StaticRouter>
    const html = renderToString(<Provider initialData={fetchResult||{}}>
        <StaticRouter location={path} context={context}>
            <App routeList={staticRoutesList}></App>
        </StaticRouter>
    </Provider>);


    const helmet = Helmet.renderStatic();

    ctx.body=`<!DOCTYPE html>
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
}