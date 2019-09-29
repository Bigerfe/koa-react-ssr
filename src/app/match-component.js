/**
 * 根据 url 查找组件
 */

import {
    matchRoutes
} from 'react-router-config';
/**
 * 目前只会返回查找到的第一个组件，其他组件不会返回。
 * return {
 * component,match
 *  }
 */
export default async (url,staticRoutes) => {
    
    const routes = matchRoutes(staticRoutes, url);
    let len = routes.length,
        i = 0,
        matchC = {};

    for (; i < len; i++) {
        let {
            route,
            match
        } = routes[i];

        const component = route.component;

        if (component && component.hasOwnProperty('load') && typeof component.load === 'function') {
            //异步组件的查找
            matchC.component = (await component({
                match
            }).props.load()).default;
            matchC.match = match; //这种写法也可以 
            // component(match).props.load().then((C => {
            //     console.log(C.default.fetchData());
            // }));
        } else {
            matchC.component = component;
            matchC.match = match;
        }
    }

    return matchC;

}