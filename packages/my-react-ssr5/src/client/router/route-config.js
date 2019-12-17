//路由配置文件

import Index from '../pages/index';
import ArticeList from '../pages/article-list';

export default [

    {
        path:'/index',
        component:Index
    },
    {
        path: '/article',
        component: ArticeList
    }
]