

//client/app/index.js
//浏览器端页面结构渲染入口

import React from 'react';
import ReactDom from 'react-dom';
import App from '../router/index';
import { BrowserRouter} from 'react-router-dom';
import routeList from '../router/route-config';

//渲染路由
ReactDom.hydrate(<BrowserRouter>
    <App routeList={routeList} /></BrowserRouter>
, document.getElementById('root'))
