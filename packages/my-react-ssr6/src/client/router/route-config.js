//路由配置文件

import Index from '../pages/index';
import ArticeList from '../pages/article-list';
import Search from '../pages/search';

export default [

    {
        path: '/',
        component: Index,
        exact: true
    },
    {
        path:'/index',
        component:Index,
        exact: true
    },
    {
        path: '/article',
        component: ArticeList,
        exact: true
    },
    {
        path: '/search',
        component: Search,
        exact: true
    }
]