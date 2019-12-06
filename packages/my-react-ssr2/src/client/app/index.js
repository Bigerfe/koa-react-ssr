

//client/app/index.js
//浏览器端页面结构渲染入口

import React from 'react';
import ReactDom from 'react-dom';
import App from '../router/index';
import { BrowserRouter} from 'react-router-dom';

//渲染index 组件1
ReactDom.hydrate(<BrowserRouter>
    <App /></BrowserRouter>
, document.getElementById('root'))
