//渲染入口，支持 csr 和 ssr。
//ssr 会自动完成双端 dom 对比
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import React from 'react';
import Routes  from '../routes/index';
import Provider from './provider';
import matchComponent from './match-component';
import routesConfig from '../routes/routes-config';

function renderUI(state,initialData) {
    let render = ReactDOM.hydrate;
    if(!state)render=ReactDOM.render;

    render(<BrowserRouter><Provider initialData={initialData}>
            <Routes />
        </Provider>
    </BrowserRouter>, document.getElementById('rootEle'), (e) => {
    });
}

function entryIndex() {
    let APP_PROPS = '';
    let STATE_KEY = '_INITAL_DATA';
    let state = true;

    if (!window.hasOwnProperty(STATE_KEY)) {
        state = false;
    } else {
        APP_PROPS = JSON.parse(window[STATE_KEY] || "{}");
    }

    console.log('state', state);

    if (!state) {//客户端渲染
        renderUI(state);
    } else {
        matchComponent(document.location.pathname, routesConfig()).then(res => {
            renderUI(true);
        });
    }
}

//执行入口
entryIndex();


//开发环境才会开启
if (process.env.IS_DEV && module.hot) {
    module.hot.accept();
}