

//client/app/index.js
//浏览器端页面结构渲染入口

import React from 'react';
import ReactDom from 'react-dom';
import App from '../router/index';
import { BrowserRouter} from 'react-router-dom';
import Provider from './provider';

function clientRender() {
    let data =JSON.parse( document.getElementById('ssrTextInitData').value);

    //渲染index 组件1
    ReactDom.hydrate(<BrowserRouter>
        <Provider initialData={data}>
            <App />
        </Provider>
    </BrowserRouter>
        , document.getElementById('root'))

}



//渲染入口
clientRender();



//开发环境才会开启
if (module.hot) {
    module.hot.accept();
}