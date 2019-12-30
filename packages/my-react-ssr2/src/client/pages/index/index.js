//src/client/pages/index/index.js
//index 组件

import React from 'react';
import {Link} from 'react-router-dom';
//组件
export default class Index extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }
    handlerClick(){
        alert('一起来玩 react 服务端渲染');
    }

    render() {
        return <div onClick={this.handlerClick}>首页</div>
    }
}