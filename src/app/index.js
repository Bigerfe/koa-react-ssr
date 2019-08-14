import ReactDOM from 'react-dom';
import React from 'react';
import Routes  from '../routes/index';

ReactDOM.hydrate(<Routes/>,document.getElementById('rootEle'));

if (module.hot) {
    module.hot.accept();
}