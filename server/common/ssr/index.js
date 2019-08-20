//react 服务端组件渲染的入口文件
import React from 'react';
import { renderToString, renderToStaticMarkup, renderToNodeStream } from 'react-dom/server';
import matchComponent from '../../../src/app/match-component';
import Provider from '../../../src/app/provider';
import ejsHtml from '../other/ejs-html';
import { StaticRouter,Switch,Route } from "react-router";
import { renderRoutes} from 'react-router-config';
import NoMatch from '../../../src/page/no-match';//0匹配的时候
import config from '../../config';
import CacheHelper from '../other/cache-helper';

import { getCacheStaticRoutes} from '../ssr/static-routes';


const getComponentHtml =async (ctx)=>{
   
    const routes = await getCacheStaticRoutes();

    let path = ctx.path, url = ctx.url;

    const routeMatch = await matchComponent(path, routes);

    const COM = routeMatch.component || NoMatch;

    const match = routeMatch.match || {};

    //TODO:不知道还有没有更好的办法
    const initialData = {};//用于前端获取数据，区分多页面
    initialData[path] = {};
    initialData[path].init = true;
    initialData[path].data = await(COM.getInitialProps ? COM.getInitialProps(match) : null);

    const props ={
        match: {
            url: ctx.path
        }
    };

    //没用到这
    const context = {};

    console.log('routes');
    console.log(routes);

    // <StaticRouter context={context} location={ctx.url}>
    const html = renderToString(<Provider initialData={{ initialData:initialData}}>
        <StaticRouter location={ctx.path} context={context}>
            {renderRoutes(routes)}
        </StaticRouter>
    </Provider>);

    return {
        html, initialData};
}


const renderBody =async  (ctx,data)=>{  
    ctx.body = await ejsHtml('../../temp/ssr.html',data);
}

export default async (ctx) => {

    ctx.set('Content-Type', 'text/html;charset=UTF-8');
    let htmlstr='',
    renderData={
        htmlContent:htmlstr,
        propsData:"{}",
        config:config.cdnHost
    };

    if(config.isSSR){
        console.log('render html =======================');
        const res = await getComponentHtml(ctx);
        console.log('res',res);
        renderData.htmlContent = res.html;
        renderData.propsData = JSON.stringify({ initialData: res.initialData });
        renderData.config = config.cdnHost;
    }
        
    await renderBody(ctx,renderData);
 
}