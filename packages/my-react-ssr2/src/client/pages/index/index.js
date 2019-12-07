//src/client/pages/index/index.js
//index 组件

import React from 'react';
import {Link} from 'react-router-dom';
//组件
export default class Index extends React.Component {
    constructor(props) {
        super(props);
    }
    handlerClick(){
        alert('一起来玩 react 服务端渲染');
    }

    render() {
        const str='click here!1122';
        return <div onClick={this.handlerClick}><span>{str}</span></div>
    }
}