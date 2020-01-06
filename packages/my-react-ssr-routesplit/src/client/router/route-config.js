//路由配置文件


import React from 'react';

//import List from '../pages/list';
//import Index from '../pages/index';


//组件动态加载容器
import AsyncLoader from './async-loader';

function pageNotFound() {
    return <div>404页面</div>
}

export default [
    {
        path: ['/','/index'],
        component: AsyncLoader(() => import('../pages/index')),
        exact:true
    },
    {
        path: '/list',
        component: AsyncLoader(() => import('../pages/list')),
        exact: true
    },
    {
        path: '*',
        component: pageNotFound,
        exact: true
    }
]