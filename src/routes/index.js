/**
 * 基于react-routerd的路由
 */

import React from 'react';
import { Router, Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from '../page/index/index';
import Detail from '../page/detail/index';
import List from '../page/list/index';
import Layout from '../app/layout';

export default class Index extends React.Component{

    render(){
        return <BrowserRouter>
                 <Layout>
                        <Switch>
                            <Route path="/" exact={true} component={Home}></Route>
                            <Route path="/index" exact={true} component={Home}></Route>
                            <Route path="/detail" exact={true} component={Detail}></Route>
                            <Route path="/list" exact={true} component={List}></Route>
                        </Switch>
                </Layout>
            </BrowserRouter>
    }
}