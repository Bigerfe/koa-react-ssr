//路由配置文件

import Index from '../pages/index';
import List from '../pages/list';

export default [
    {
        path: '/',
        component: Index,
        exact:true
    },
    {
        path:'/index',
        component:Index,
        exact: true
    },
    {
        path: '/list',
        component: List,
        exact: true
    }
]