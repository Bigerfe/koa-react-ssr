// /src/server/middlewares/react-ssr.js

//完成 react ssr 工作的中间件
//引入Index 组件
import React from 'react';
import { renderToString } from 'react-dom/server';

import { StaticRouter, Route, matchPath} from 'react-router';
import { renderRoutes} from 'react-router-config';

import Layout from '../../client/app/layout';//如果有 layout 组件，也需要一起转换为 html
import routeList from '../../client/router/route-config';

//自定义 provider 用来传递数据
import Provider from '../../client/app/provider';

import matchRoute from '../../share/match-route';

import App from '../../client/router/index';

export default  async (ctx,next)=>{

    const path = ctx.request.path;

    if(path.indexOf('.')>-1){
        ctx.body=null;
        return next();
    }

    console.log('ctx.request.path', ctx.request.path);

    //查找到的目标路由对象
    let targetRoute = matchRoute(path,routeList);

    //得到数据
    let fetchDataFn = targetRoute.component.getInitialProps;
    let fetchResult = {};
    if(fetchDataFn){
        fetchResult = await fetchDataFn();
        //设置初始化数据，渲染时会作为属性传递给组件
        targetRoute.initialData = fetchResult;
    }

    let { page } = fetchResult || {};

    let tdk = {
        title: '默认标题 - my react ssr',
        keywords: '默认关键词',
        description: '默认描述'};

    if(page && page.tdk){
        tdk=page.tdk;
    }

    //渲染的路由和数据
    const props = {
        routeList
    }

    const html = renderToString(<StaticRouter><Layout>
        <targetRoute.component initialData={fetchResult} ></targetRoute.component></Layout>
        </StaticRouter>);

    ctx.body=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>${tdk.title}</title>
    <meta name="keywords" content="${tdk.keywords}" />
    <meta name="description" content="${tdk.description}" />
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
<script type="text/javascript"  src="/index.js"></script>
`;

    await next();
}