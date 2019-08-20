//web app 
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import React from 'react';
import Routes  from '../routes/index';
import Provider from './provider';
import matchComponent from '../../server/common/ssr/match-component';


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

console.log(BrowserRouter);

matchComponent('/detail').then(res=>{
    ReactDOM.hydrate(<BrowserRouter>
        <Provider initialData={APP_PROPS}>
            <Routes />
        </Provider>
    </BrowserRouter>, document.getElementById('rootEle'), (e) => {
    });
});


//开发环境才会开启
if (process.env.IS_DEV && module.hot) {
    module.hot.accept();
}