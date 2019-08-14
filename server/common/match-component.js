/**
 * 根据 url 查找组件
 */

import { matchRoutes } from 'react-router-config';
import AppRoutes from './app-routes';

export default async (url)=>{

   const routes =   matchRoutes(AppRoutes, url);

   routes.map(({route,match})=>{
  
    if(match.path===url){
        console.log('route', route);
        console.log('match', match);

        const component = route.component;

        console.log(component.fetchData());
    }
   });
   return routes;
    
}