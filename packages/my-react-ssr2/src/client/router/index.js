// src/client/router/indxex.js
//路由配置文件


import Layout from '../app/layout';
import React  from 'react';
import { Route, Switch } from 'react-router-dom';

function App({ routeList}) {
    return (
            <Layout> 
                <Switch>
                    {
                    routeList.map(item=>{
                                return <Route exact key={item.path} {...item}></Route>
                        })
                    }
                </Switch>
             </Layout>
    );
}

export default App;