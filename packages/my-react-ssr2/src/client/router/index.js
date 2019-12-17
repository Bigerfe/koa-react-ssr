// src/client/router/indxex.js
//路由配置文件


import Layout from '../app/layout';
import routesList  from './route-config';

import React  from 'react';
import { Route, Switch } from 'react-router-dom';

function Test(props) {
    return <div>test</div>
}

function App() {
    return (
            <Layout> 
                <Switch>
                    {
                        routesList.map(item=>{
                                return <Route exact key={item.path} {...item}></Route>
                        })
                    }

                <Route path="/test" component={Test}></Route>
                </Switch>
             </Layout>
    );
}

export default App;