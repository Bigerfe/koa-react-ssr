// src/client/router/indxex.js
//路由配置文件


import Layout from '../app/layout';

import React  from 'react';
import { Route, Switch, BrowserRouter,Redirect } from 'react-router-dom';
//高阶组件，用于浏览器端渲染 封装重复逻辑以及判断是否异步请求数据
import pageWrapper from '../common/components/page-wrapper';

function Page404() {
    return <div>404</div>
}

/**
 * 返回服务端路由组件
 * @param {路由配置} routeList 
 */
function getServeRoute(routeList) {
    
        return routeList.map(item => {
            return <Route key={item.path} {...item}></Route>
        })
    
}

/**
 * 返回浏览器端路由组件
 * @param {路由配置} routeList 
 */
function getClientRoute(routeList) {
    return routeList.map(item => {
        let newItem = { ...item, component:pageWrapper(item.component)}
        return <Route key={item.path} {...newItem}></Route>
    })
}

function App({routeList,isOnServer}) {
    return (
            <Layout> 
               <Switch>
                {
                    isOnServer?getServeRoute(routeList):getClientRoute(routeList)
                }
                <Route to="*" component={Page404}></Route>
            </Switch>
            </Layout>
    );
}

export default App;