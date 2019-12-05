

//client/app/index.js
//浏览器端页面结构渲染入口

import React from 'react';
import ReactDom from 'react-dom';
import Index from '../pages/index';
import ArticleList from '../pages/article-list';

//渲染index 组件1
ReactDom.hydrate(<>
    <Index /><ArticleList/>
     </>, document.getElementById('root'))
