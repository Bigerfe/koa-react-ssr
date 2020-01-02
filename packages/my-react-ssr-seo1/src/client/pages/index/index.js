import React from 'react';
import {
    Link
} from 'react-router-dom';

import { Helmet } from 'react-helmet';

export default class Index extends React.Component {
    constructor(props) {
        super(props);
        const initData = props.initialData || {};
        this.state={
            page:initData.page,
            fetchData:initData.fetchData
        }
    }

    static async  getInitialProps() {
        console.log('fetch data index');
        //模拟数据请求方法
        //...

        return {
            page:{
                tdk:{
                    title:'首页 - react ssr',
                    keywords:'前端技术江湖',
                    description:'描述'
                }
            }
        };
    }

    componentDidMount() {
        if (!this.state.fetchData) {
            //如果没有数据，则进行数据请求
            Index.getInitialProps().then(res => {
                this.setState({
                    fetchData: res.fetchData || [],
                    page:res.page
                });

            })
        }
    }



    render() {
        const {tdk={}} = this.state.page || {};
        return <div>
        <Helmet>
                <title>{tdk.title}</title>
                <meta name="description" content={tdk.description}/>
                <meta name="keywords" content={tdk.keywords}/>
        </Helmet>
        首页</div>
    }
}