import React from 'react';
import {
    Link
} from 'react-router-dom';
export default class Index extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>当前是 列表页面 <Link to="/index">返回首页</Link></div>
    }
}