/**
 * 组装路由表,用于前端渲染和服务端路由查找
 * 此代码无需变动
 */

import routeList from './routes-muster';
import NoMatch from '../page/no-match';

export default ()=>{
    const routes=[];
    routeList.forEach(item=>{
         item.forEach(small=>{
            routes.push(small);
        })
    });
    return routes;
}
// 参考路由表格式
// const routes = [
//     {
//         component: null,
//         routes: [
//             {
//                 path: "/",
//                 exact: true,
//                 component: Home
//             },
//             {
//                 path: "/child/:id",
//                 component: Child,
//                 routes: [
//                     {
//                         path: "/child/:id/grand-child",
//                         component: GrandChild
//                     }
//                 ]
//             },
//             {
//                 path: '/detail', exact: true,
//                 component: Detail,
//             },
//             {
//                 path: '/detail/:a/:b', exact: true,
//                 component: Detail
//             }

//         ]
//     }
// ];