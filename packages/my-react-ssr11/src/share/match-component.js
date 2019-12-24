
// src/share/match-route.js
//路由匹配，然后根据匹配的路由得到对应的组件

import { matchPath} from 'react-router';

export default (opt,routeList)=>{ 

        let { path } = opt;
        let Component;

        for (var item of routeList) {
            if (matchPath(path, item)) {
                Component = item.component;//查找到组件就不会继续查找，这里针对的是页面组件
                break;
            }
        }
        return Component;
}