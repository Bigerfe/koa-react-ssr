/**
 * 基于react-routerd的路由
 */

import React,{Component} from 'react';
import { Router, Route, BrowserRouter, Switch,StatusRoute } from 'react-router-dom';
import getRoutes from './routes-config';

function AppRouter(){
    const routes = getRoutes();
    return (
          <BrowserRouter>
                 <Switch>
                    {
                        routes.map((item,index)=>{
                            return <Route path={item.path} key={index} exact={item.exact} component={item.component}></Route>
                        })
                    }
              

                </Switch>
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
