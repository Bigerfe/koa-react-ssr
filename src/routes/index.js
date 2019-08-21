/**
 * 基于react-routerd的路由
 */

import React,{Component} from 'react';
import {Route, Switch } from 'react-router';
import getRoutes from './routes-config';
import Layout from '../app/layout';

function App(){
    const routes = getRoutes();
    return (
        <Layout>
            <Switch>

                        {
                            routes.map((item,index)=>{
                                return <Route path={item.path} key={index} exact={item.exact} component={item.component}></Route>
                            })
                        }
            </Switch>
        </Layout>
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
export default App;
