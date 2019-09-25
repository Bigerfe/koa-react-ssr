/**
 * 基于react-routerd的路由
 */

import React,{Component} from 'react';
import {Route, Switch } from 'react-router';
import getRoutes from './routes-config';
import Layout from '../app/layout';

function App(){
    const routes = getRoutes();
    return (
        <Layout>
            <Switch>

                        {
                            routes.map((item,index)=>{
                                return <Route path={item.path} key={index} exact={item.exact} render={(props)=>{
                                    props.zzOpt={
                                        qeury: searchToQuery(props.location.search),
                                        params:props.match.params
                                    };
                                    return <item.component {...props}></item.component>
                                }}></Route>
                            })
                        }
            </Switch>
        </Layout>
    );
}

/**
 *把 url 的 search 转换为 obj 形式
 *
 * @param {*} str
 * @returns
 */
function searchToQuery(str) {
    if(!str) return {};
    str=str.replace(/^\?/,'');

    let obj = {};
    let arr = str.split('&');
    arr && arr.forEach(item=>{
        let v = item.split('=');
        if(v && v.length>=1){
            obj[v[0]]=v[1];
        }
    });

    return obj;
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
export default App;
