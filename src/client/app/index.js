

//client/app/index.js
//浏览器端页面结构渲染入口

import React from 'react';
import ReactDom from 'react-dom';
import App from '../router/index';
import { BrowserRouter } from 'react-router-dom';
import routeList from '../router/route-config';
import matchRoute from '../../share/match-route';
import proConfig from '../../share/pro-config';

function renderDom(routeList) {
        //渲染index
        ReactDom.hydrate(<BrowserRouter>
                <App routeList={routeList} />
        </BrowserRouter>
                , document.getElementById('root'))
}

function clientRender(routeList) {

        let initialData = JSON.parse(document.getElementById('ssrTextInitData').value.replace(/\\n/g,''));
        window.__INITIAL_DATA__ = initialData || {};

        //查找路由
        let matchResult = matchRoute(document.location.pathname, routeList);
        let { targetRoute } = matchResult;
        if (targetRoute) {
                //预加载 等待异步脚本加载完成
                if (targetRoute.component[proConfig.asyncComponentKey]) {
                        targetRoute.component().props.load().then(res => {
                                //异步组件加载完成后再渲染页面
                                console.log('异步组件加载完成.');
                                //设置已加载完的组件，否则需要重新请求
                                targetRoute.component = res?res.default:null;
                                renderDom(routeList);
                               
                        });
                }

        } else {
                renderDom(routeList);
        }
}

//渲染入口
clientRender(routeList);

//开发环境才会开启
if (process.env.NODE_ENV === 'development' && module.hot) {
        module.hot.accept();
}