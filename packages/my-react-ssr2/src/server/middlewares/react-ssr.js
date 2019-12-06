// /src/server/middlewares/react-ssr.js

//完成 react ssr 工作的中间件
//引入Index 组件
import React from 'react';
import { renderToString } from 'react-dom/server';

import { StaticRouter,Route} from 'react-router';
import { renderRoutes} from 'react-router-config';

import Layout from '../../client/app/layout';//如果有 layout 组件，也需要一起转换为 html
import routeList from '../../client/router/route-config';

//根据请求 path 查找组件
const findRouteByPath=(opt)=>{
    let {path} = opt;
    let Component;
    for(var item of routeList){
        if(item.path===path){//路由匹配
            Component = item.component;
               break;
        }
     
    }

    return Component;
}

export default  (ctx,next)=>{

    console.log('ctx.request.path', ctx.request.path);

    const path = ctx.request.path;

    let Component = findRouteByPath({
        path
    });

    if (!Component){
        Component = function Not() {
            return <div>404</div>
        }
    }

    let context={};

    const html = renderToString(<StaticRouter location={path} context={context}>
        <Layout>
            {renderRoutes(routeList)}
        </Layout>
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
</body>
</html>
</body>
<script type="text/javascript"  src="index.js"></script>
`;

    return next();
}