

//client/app/index.js
//浏览器端页面结构渲染入口

import React from 'react';
import ReactDom from 'react-dom';
import App from '../router/index';
import { BrowserRouter} from 'react-router-dom';

import StyleContext from 'isomorphic-style-loader/StyleContext'
import Provider from './provider';

function clientRender() {
    let data =JSON.parse( document.getElementById('ssrTextInitData').value);

    const insertCss = (...styles) => {
        const removeCss = styles.map(style => style._insertCss())
        return () => removeCss.forEach(dispose => dispose())
    }

    //渲染index 组件1
    ReactDom.hydrate(<BrowserRouter>
        <Provider initialData={data} insertCss={insertCss}>
            <StyleContext.Provider value={{ insertCss }}>
            <App />
            </StyleContext.Provider>
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