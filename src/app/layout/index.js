import React from 'react';
import {
    Link
} from 'react-router-dom';

import './index.scss';

export default class Index extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div className="layout-box">
            <h1>krs(koa-react-ssr) 服务端渲染框架-demo <a href="https://github.com/Bigerfe/koa-react-ssr/tree/v1" target="_blank">github地址</a> </h1>
            <nav>
            <ul><li> <Link to="/">首页</Link></li>
                    <li> <Link to="/products">产品列表</Link></li>
                    <li> <Link to="/news">新闻中心</Link></li></ul>
            </nav>
            {this.props.children || null}
        </div>
    }
}