//react 组件渲染的入口文件

import React from 'react';
import { renderToString, renderToStaticMarkup, renderToNodeStream } from 'react-dom/server';
import matchComponent from './match-component';
import Provider from '../../../src/app/provider';
import ejsHtml from '../other/ejs-html';
import { StaticRouter } from "react-router";

const initalData={
    list: [
        { id: 1, name: '张三' }, { id: 2, name: '李四' }, { id: 3, name: '大刀王五你听过吗？ 那你 out 了' }
    ]
}

const getComHtml = (COM,ctx)=>{
    const context={
        initalData
    };

    const html = renderToString(<Provider initalData={initalData}>
        <StaticRouter context={context} location={ctx.url}>
        <COM />
        </StaticRouter>
    </Provider>);
    console.log(html);
    return html;
}


const renderBody =async  (ctx,data)=>{
    ctx.body = await ejsHtml('../../temp/ssr.html',data);
}

export default async (ctx) => {

    ctx.set('Content-Type', 'text/html;charset=UTF-8');

    let path = ctx.path,url = ctx.url;

    const routeMatch = await matchComponent(path);

    const htmlstr = getComHtml(routeMatch.component,ctx);

    await renderBody(ctx,{
        htmlContent:htmlstr,
        propsData:JSON.stringify(initalData)
    });
}