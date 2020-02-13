//路由配置文件


import React from 'react';

//组件动态加载容器
import AsyncLoader from './async-loader';

function pageNotFound({staticContext}) {
    if(staticContext){
        staticContext.code=404;
    }

    return <div>404页面</div>
}

export default [
    {
        path: ['/','/index'],
        component: AsyncLoader(() => import('../pages/index')),
        exact:true
    },
    {
        path: '/detail/:id',
        component: AsyncLoader(() => import('../pages/detail')),
        exact: true
    },
    {
        path: '*',
        component: pageNotFound,
        exact: true
    }
]