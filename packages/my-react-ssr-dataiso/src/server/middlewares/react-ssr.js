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

    console.log('ctx.request.path.', ctx.request.path);

    //查找到的目标路由对象
    let matchResult = matchRoute(path,routeList);
    let { targetRoute, targetMatch }=matchResult;

    //得到数据
    let fetchDataFn = targetRoute.component.getInitialProps;
    let fetchResult = {};
    if(fetchDataFn){
        fetchResult = await fetchDataFn();
    }

    const context={
        initialData:fetchResult
    };
    const html = renderToString(<StaticRouter location={path} context={context}>
        <App routeList={routeList}></App>
        </StaticRouter>);

    ctx.body=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>my react ssr</title>
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
<script type="text/javascript"  src="/index.js"></script>
`;

    await next();
}