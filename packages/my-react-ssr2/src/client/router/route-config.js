//路由配置文件

import Index from '../pages/index';
import List from '../pages/list';
import About from '../pages/about';

export default [

    {
        path: '/',
        component: Index,
        exact:true
    },
    {
        path:'/index',
        component:Index,
        exact:true
    },
    {
        path: '/list',
        component: List,
        exact:true
    },
    {
        path: '/about',
        component: About,
        exact: true
    }
]