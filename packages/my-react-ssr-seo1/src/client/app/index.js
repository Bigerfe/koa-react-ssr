

//client/app/index.js
//浏览器端页面结构渲染入口

import React from 'react';
import ReactDom from 'react-dom';
import App from '../router/index';
import { BrowserRouter} from 'react-router-dom';
import routeList from '../router/route-config';

import Provider from './provider';

function clientRender() {
    let data =JSON.parse( document.getElementById('ssrTextInitData').value);

    const props = {
        routeList,
        isOnServer:false
    }
    //渲染组件到页面
    ReactDom.hydrate(<BrowserRouter>
        <Provider initialData={data}>
            <App {...props}/>
        </Provider>
    </BrowserRouter>
        , document.getElementById('root'))

}
//渲染入口
clientRender();
