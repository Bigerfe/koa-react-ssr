// src/client/router/indxex.js
//路由配置文件


import Layout from '../app/layout';
import routesList  from './route-config';

import React  from 'react';
import { Route, Switch } from 'react-router-dom';

function App() {
    return (
            <Layout> 
               <Switch>
                {
                    routesList.map(item=>{
                            return <Route key={item.path} {...item}></Route>
                    })
                }
                </Switch>
            </Layout>
    );
}

export default App;