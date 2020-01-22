//src/client/pages/detail/index.js
//小册详情 组件

import React from 'react';
import {Link} from 'react-router-dom';
import fetchDetail from '../../common/fetch/get-detail';

import PageContainer from '../../common/components/page-container';

import './index.scss';

//组件
class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    static async  getInitialProps(ctx) {
        let res = await fetchDetail(ctx.match.params.id);

        return {
            fetchData:res.data ||{},
            page:{
                tdk:{
                    title:'小册详情 - koa-react-ssr',
                    keywords:'koa-react-ssr',
                    description:'koa-react-ssr'
                }
            }
        };
    }

    render() {
        //渲染数据
        const {fetchData={}} = this.props.initialData || {};
        const  {html}  = fetchData || null;
        return html ? <div className="detail-box" dangerouslySetInnerHTML={{ __html: html}}></div>:null
    }
}

export default PageContainer(Index); 