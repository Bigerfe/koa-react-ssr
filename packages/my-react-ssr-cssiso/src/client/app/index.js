

//client/app/index.js
//浏览器端页面结构渲染入口

import React from 'react';
import ReactDom from 'react-dom';
import App from '../router/index';
import { BrowserRouter } from 'react-router-dom';
import routeList from '../router/route-config';
import matchRoute from '../../share/match-route';
import proConfig from '../../share/pro-config';

import StyleContext from 'isomorphic-style-loader/StyleContext'

function renderDom(routeList) {
        
        const insertCss = (...styles) => {
                const removeCss = styles.map(style => style._insertCss());//客户端执行，插入style
                return () => removeCss.forEach(dispose => dispose());//组件卸载时 移除当前的 style 标签
        }
        ReactDom.hydrate(<BrowserRouter>
                <StyleContext.Provider value={{ insertCss }}>
                        <App routeList={routeList} /></StyleContext.Provider>
        </BrowserRouter>
                , document.getElementById('root'))
}

function clientRender(routeList) {

      

        let initialData = JSON.parse(document.getElementById('ssrTextInitData').value);
        window.__INITIAL_DATA__ = initialData;

        //查找路由
        let matchResult = matchRoute(document.location.pathname, routeList);
        let { targetRoute } = matchResult;
        if (targetRoute) {
                //等待异步脚本加载完成
                if (targetRoute.component[proConfig.asyncComponentKey]) {
                        targetRoute.component().props.load().then(res => {
                                //异步组件加载完成后再渲染页面
                                console.log('异步组件加载完成.....');
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