//路由配置文件

import React from 'react';
import Search from '../pages/search';

//组件动态加载容器
import AsyncLoader  from './async-loader';

export default [
    {
        path:['/','/index'],
        component: AsyncLoader(() => import('../pages/index')),
        exact: true
    },
    {
        path: '/article',
        component: AsyncLoader(() => import(/*webpackChunkName:"chunk-article-list"*/'../pages/article-list')),
        exact: true
    },
    {
        path: '/search',
        component: Search,
        exact: true
    }
]