/**
 * 基于react-routerd的路由
 */

import React,{Component} from 'react';
import { Router, Route, BrowserRouter, Switch } from 'react-router-dom';
import Layout from '../common/components/layout/layout';
import routesMuster from './routes-muster';


function AppRouter(){
    return (
          <BrowserRouter>
                <Layout>
                 <Switch>
                    {
                        routesMuster.map(item=>{
                           return item.map(small=>{
                               return <Route path={small.path} exact={small.exact} component={small.component}></Route>
                           })

                        })
                    }
                </Switch>
            </Layout>
            </BrowserRouter>
    );
}

//这种方式显示也可以，现在不用
// function AppRouter() {
//     return (<BrowserRouter>
//         <Layout>
//             <Switch>
//                 {renderRoutes(routes())}
//             </Switch>
//         </Layout>
//     </BrowserRouter>
//     );
// }
export default AppRouter;
