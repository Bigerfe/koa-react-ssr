//web app 
import ReactDOM from 'react-dom';
import React from 'react';
import Routes  from '../routes/index';
import Provider from './provider';


// const APP_PROPS = window.APP_PROPS || {};
// const start = new Date();
// const propDom = document.getElementById('propsData');
// console.log(propDom.getAttribute('data-props'));
let APP_PROPS = '';
try {
    APP_PROPS = JSON.parse(window._INITAL_DATA||"{}");
} catch (error) {
    APP_PROPS = '';
    console.error('获取初始数据失败', error);
}

ReactDOM.hydrate(<Provider initialData={APP_PROPS}>
    <Routes />
    </Provider>,document.getElementById('rootEle'),(e)=>{
    });
//开发环境才会开启
if (process.env.IS_DEV && module.hot) {
    module.hot.accept();
}