// src/client/router/indxex.js
//路由配置文件


import Layout from '../app/layout';
import routesList  from './route-config';

import React  from 'react';
import { Route, Switch, BrowserRouter,Redirect } from 'react-router-dom';

function Page404() {
    return <div>404拉 </div>
}

function App() {
    return (
            <Layout> 
               <Switch>
                {
                    routesList.map(item=>{
                            return <Route exact={item.exact} key={item.path} {...item}></Route>
                    })
                }
                <Route to="*" component={Page404}></Route>
            </Switch>
            </Layout>
    );
}

export default App;