// src/client/router/indxex.js
//路由配置文件


import Layout from '../app/layout';

import React  from 'react';
import { Route, Switch, BrowserRouter,Redirect } from 'react-router-dom';

function App({routeList}) {
    return (
            <Layout> 
               <Switch>
                {
                    routeList.map(item=>{
                        return <Route key={item.path} {...item} />
                    })
                }
            </Switch>
            </Layout>
    );
}

export default App;