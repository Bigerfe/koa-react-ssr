/**
 * 根据 url 查找组件
 */

import {
    matchRoutes
} from 'react-router-config';
import AppRoutes from './app-routes';
import Routes from '../../src/routes/routes-config';

export default async (url) => {

    const routes = matchRoutes(Routes(), url);

    routes.map(({
        route,
        match
    }) => {
        console.log('route0', route);
        console.log('match0', match);
        if (match.url === url) {
            console.log('route', route);
            console.log('match', match);

            const component = route.component;
             component(match).props.load().then((C=>{
                 console.log(C.default.fetchData());
             }));
        }
    });
    return routes;

}