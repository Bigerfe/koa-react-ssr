//渲染入口，支持 csr 和 ssr。
//ssr 会自动完成双端 dom 对比
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import React from 'react';
import Routes  from '../routes/index';
import Provider from './provider';
import matchComponent from './match-component';
import routesConfig from '../routes/routes-config';
import base64 from '../common/module/base64';

function renderUI(state,initialData) {
    let render = ReactDOM.hydrate;
    if(!state)render=ReactDOM.render;

    render(<BrowserRouter><Provider initialData={initialData}>
            <Routes />
        </Provider>
    </BrowserRouter>, document.getElementById('rootEle'), (e) => {
    });
}

function filterJSONStr(str) {
    return str.replace(/\n/g,'<br/>');
}

function entryIndex() {
    let APP_INIT_DATA = {};
    let state = true;

    let stateText = document.getElementById('krs-server-render-data-BOX');
 
    if (!stateText) {
        state = false;
    } else {
        APP_INIT_DATA = JSON.parse(filterJSONStr(base64.decode(stateText.value||'')) || "{}");
    }

    console.log('state', state);

    if (!state) {//客户端渲染
        renderUI(state);
    } else {
        matchComponent(document.location.pathname, routesConfig()).then(res => {
            renderUI(true, APP_INIT_DATA);
        });
    }
}

//执行入口
entryIndex();


//开发环境才会开启
if (process.env.IS_DEV && module.hot) {
    module.hot.accept();
}