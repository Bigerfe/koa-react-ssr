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
                        routes.map(item=>{
                            return <Route path={item.path} key={item.path} exact={item.exact} component={item.component}></Route>
                        })
                    }
                    <Route path="/404" render={(props) => {
                    console.log('props');
                    console.log(props);
                        // 客户端无staticContext对象
                        // if (staticContext) {
                        //     // 设置状态码
                        //     staticContext.status = props.code;
                        // }
                        return <div>404</div>
                    }} />

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
