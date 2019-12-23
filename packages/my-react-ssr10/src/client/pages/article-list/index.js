import React from 'react';
import {
    Link
} from 'react-router-dom';
import { Helmet } from 'react-helmet';

import "./index.scss";

export default class AticleList extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            return <div className="article-list">
               <Helmet>
                <title>列表页</title>
                <meta name="description" content="终身学习"/>
                  <meta name="keywords" content="前端技术江湖"/>
                </Helmet>
            文章列表</div>
        }
}