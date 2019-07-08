/**
 * 基于react-routerd的路由
 */

import React,{Component} from 'react';
import { Router, Route, BrowserRouter, Switch } from 'react-router-dom';
import Layout from '../app/layout';
import routesMuster from './routes-muster';


export default class Index extends React.Component{
    render(){
        return <BrowserRouter>
            <Layout>
                <Switch>
                    {
                        routesMuster.map(item=>{
                           return item.map(small=>{
                               return <Route path={small.path} exact={true} component={small.component}></Route>
                           })

                        })
                    }
                </Switch>
                </Layout>
            </BrowserRouter>
    }
}
