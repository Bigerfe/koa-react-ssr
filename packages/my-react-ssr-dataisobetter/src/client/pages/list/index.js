//src/client/pages/list/index.js
//index 组件

import React from 'react';
import {Link} from 'react-router-dom';

import tempData from './data';

import PageContainer from '../../common/components/page-container';

//组件
class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    static async  getInitialProps(ctx) {
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
                    title:'列表页 - react ssr',
                    keywords:'前端技术江湖',
                    description:'关键词'
                }
            }
        };
    }

    render() {
        //渲染数据
        const {fetchData,page} = this.props.initialData;
        const { code, data } = fetchData||{};
        
        return <div>
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

export default PageContainer(Index); 