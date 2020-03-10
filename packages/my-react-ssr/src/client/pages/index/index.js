//src/client/pages/index/index.js
//index 组件

import React from 'react';

//组件
export default class Index extends React.Component {
    constructor(props) {
        super(props);
    }


   handlerClick(){
       alert('一起来玩 react ssr 呀,点我有反应吗？');
   }


    render() {
        return <h1 onClick={this.handlerClick}>hello react ssr!</h1>
    }
}