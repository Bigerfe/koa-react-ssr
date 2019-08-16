//web app 入口文件


import ReactDOM from 'react-dom';
import React from 'react';
import Routes  from '../routes/index';
import Provider from './provider';


ReactDOM.hydrate(<Provider>
    <Routes />
    </Provider>,document.getElementById('rootEle'));

if (module.hot) {
    module.hot.accept();
}