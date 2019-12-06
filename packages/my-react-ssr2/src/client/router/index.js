// src/client/router/indxex.js
//路由配置文件


import Layout from '../app/layout';

import routesList  from './route-config';

import React  from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

function App() {
    return (
            <Layout> 
                <Switch>
                {
                    routesList.map(item=>{
                            return <Route key={item.path} path={item.path} exact={true} component={item.component}></Route>
                    })
                }
                </Switch>
            </Layout>
    );
}

export default App;