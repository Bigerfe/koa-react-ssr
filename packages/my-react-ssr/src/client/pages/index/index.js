//src/client/pages/index/index.js
//index 组件

import React from 'react';

//组件
export default class Index extends React.Component {
    constructor(props) {
        super(props);
    }


   handlerClick(){
       alert('一起来玩 react 服务端渲染啊');
   }


    render() {
        return <div onClick={this.handlerClick}>click here!</div>
    }
}