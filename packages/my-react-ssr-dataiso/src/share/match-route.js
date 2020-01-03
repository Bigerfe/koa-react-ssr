
// src/share/match-route.js
//路由匹配，然后根据匹配的路由得到对应的组件

import { matchPath} from 'react-router';

export default (path,routeList)=>{ 
    
        let targetRoute,targetMatch;

        for (var item of routeList) {
            targetMatch = matchPath(path, item);
            if (targetMatch) {
                targetRoute = item;//查找到第一个路由后停止查找
                break;
            }
        }
    return { targetRoute, targetMatch};
}