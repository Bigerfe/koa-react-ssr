import React from 'react';
import {
    Link
} from 'react-router-dom';
export default class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    static getInitialProps() {
        return [{
            id: 100,
            name: 'this is detail page'
        }]
    }
    render() {
        return <div>当前是 列表页面 <Link to="/index">返回首页</Link></div>
    }
}