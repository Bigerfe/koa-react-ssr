//react 服务端组件渲染的入口文件

import React from 'react';
import { renderToString, renderToStaticMarkup, renderToNodeStream } from 'react-dom/server';
import matchComponent from './match-component';
import Provider from '../../../src/app/provider';
import ejsHtml from '../other/ejs-html';
import { StaticRouter } from "react-router";
import NoMatch from '../../../src/page/no-match';//0匹配的时候
import config from '../../config';

const getComponentHtml = (COM,ctx,initialData)=>{
    //没用到这
    // const context={
    //     initalData
    // };
    const props ={
        match: {
            url: ctx.path
        }
    } ;

    // <StaticRouter context={context} location={ctx.url}>
    const html = renderToString(<Provider initialData={{ initialData:initialData}}>
        <StaticRouter location={ctx.url}>
            <COM {...props}/>
        </StaticRouter>
    </Provider>);

    return html;
}


const renderBody =async  (ctx,data)=>{
    ctx.body = await ejsHtml('../../temp/ssr.html',data);
}

export default async (ctx) => {

    ctx.set('Content-Type', 'text/html;charset=UTF-8');

    let path = ctx.path,url = ctx.url;

    const routeMatch = await matchComponent(path);

    const COM = routeMatch.component||NoMatch;

    const match = routeMatch.match || {};

    //inital data

    //TODO:不知道还有没有更好的办法
    const initalData = {};//用于前端获取数据，区分多页面
    initalData[path]={};
    initalData[path].init=true;
    initalData[path].data = await (COM.getInitialProps ? COM.getInitialProps(match):null);
    

    const htmlstr = getComponentHtml(COM, ctx, initalData);
   
    await renderBody(ctx,{
        htmlContent:htmlstr,
        propsData: JSON.stringify({ initialData: initalData}),
        config:config.cdnHost
    });
}