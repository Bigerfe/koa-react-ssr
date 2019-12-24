
//client/app/index.js
//浏览器端页面结构渲染入口

import React from 'react';
import ReactDom from 'react-dom';
import App from '../router/index';
import routeList from '../router/route-config';
import { BrowserRouter} from 'react-router-dom';

import Provider from './provider';
import matchComponent from '../../share/match-component';
import proConfig from '../../share/pro-config';
import StyleContext from 'isomorphic-style-loader/StyleContext'

function clientRender() {
    let data =JSON.parse( document.getElementById('ssrTextInitData').value);

     const insertCss = (...styles) => {
        const removeCss = styles.map(style => style._insertCss())
        return () => removeCss.forEach(dispose => dispose())
    }

    //渲染index 组件1
    ReactDom.hydrate(<BrowserRouter>
        <Provider initialData={data}>
            <StyleContext.Provider value={{ insertCss }}>
            <App routeList={routeList}/>
            </StyleContext.Provider>
        </Provider>
    </BrowserRouter>
        , document.getElementById('root'))

}
//组件渲染逻辑
function render() {
    const Component = matchComponent({path:document.location.pathname}, routeList);
    if(Component[proConfig.asyncComponentKey]){
        Component().props.load().then(res=>{
            //异步组件加载完成后再渲染页面
            clientRender();
        });
    }else{
        //正常渲染
        clientRender();
    }
}

render();


//开发环境才会开启
if (module.hot) {
    module.hot.accept();
}