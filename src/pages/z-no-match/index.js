/**
 * 404页面
 */
import React from 'react';
export default class Index extends React.Component {
    constructor(props) {
        super(props);
        console.log('404page');
        console.log(props);
    }
    render() {
        return <div>404 ,当前路由没有匹配到。</div>
    }
}