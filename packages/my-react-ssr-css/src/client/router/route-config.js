//路由配置文件

import Index from '../pages/index';
import List from '../pages/list';

function pageNotFound() {
    return <div>404页面</div>
}

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
        component:List,
        exact: true
    },
    {
        path: '*',
        component: pageNotFound,
        exact: true
    }

]