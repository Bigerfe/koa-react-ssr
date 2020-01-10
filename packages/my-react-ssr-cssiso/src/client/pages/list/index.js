//src/client/pages/list/index.js
//index 组件

import React from 'react';
import {Link} from 'react-router-dom';

import tempData from './data';

import PageContainer from '../../common/components/page-container';
import withStyles from 'isomorphic-style-loader/withStyles'
import css from './list.scss';
//组件
class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    static async  getInitialProps() {
        console.log('fetch data');
        //模拟数据请求方法
        const fetchData=()=>{
            return new Promise(resolve=>{
                setTimeout(() => {
                    resolve({
                        code:0,
                        data: tempData
                    })
                }, 100);
            })
        }

        let res = await fetchData();

        return {
            fetchData:res,
            page:{
                tdk:{
                    title:'列表页 - koa-react-ssr',
                    keywords: '关键词 koa-react-ssr',
                    description: '描述 koa-react-ssr'
                }
            }
        };
    }

    render() {
        //渲染数据
        const {fetchData,page} = this.props.initialData;
        const { code, data } = fetchData||{};
        
        return <div className="list-page-box">
        {data && data.map((item,index)=>{
            return <div key={index}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
            </div>
        })}
        {!data&&<div>暂无数据</div>}
        </div>
    }
}

export default withStyles(css)(PageContainer(Index)); 