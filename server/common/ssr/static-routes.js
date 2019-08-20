/**
 * 如果客户端路由是按需加载的话 
 * 则需要把动态转为静态路由，并且在服务启动初期放入缓存，不需要每次都转换
 */

import {
    matchRoutes
} from 'react-router-config';
import Routes from '../../../src/routes/routes-config';
import CacheHelper from '../other/cache-helper';
/**
 * 判断是否是按需加载的组件
 * @param {函数或组件} component 
 */
const checkIsAsyncRoute = (component) => {
    var str = component.toString();
    return str.indexOf('require(') > -1 && str.indexOf('.resolve().') > -1;
}

const staticRoutesCacheKey = 'node-server-static-routes-cache';


//缓存静态路由
export async function getCacheStaticRoutes() {

    let routes = CacheHelper[staticRoutesCacheKey];
    if (routes) return routes;
    routes = await getStaticRoutes();

    CacheHelper[staticRoutesCacheKey] = routes;

    return routes;
}

//添加到缓存  只添加一次
export async function addCacheStaticRoutes() {

    let routes = CacheHelper[staticRoutesCacheKey];
    if (!routes)
        CacheHelper[staticRoutesCacheKey] = await getStaticRoutes();

    return routes;
}

//获得静态路由
export async function getStaticRoutes() {

    const routes = Routes();
    let len = routes.length,
        i = 0;

    const staticRoutes = [];

    for (; i < len; i++) {
        let item = routes[i];
        if (checkIsAsyncRoute(item.component)) {
            staticRoutes.push({
                ...item,
                ...{
                    component: (await item.component().props.load()).default
                }
            });
        } else {
            staticRoutes.push({
                ...item
            });
        }
    }
    return staticRoutes; //返回静态路由
}