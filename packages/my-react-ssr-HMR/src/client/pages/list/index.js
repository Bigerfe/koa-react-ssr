//src/client/pages/list/index.js
//index 组件

import React from 'react';
import {Link} from 'react-router-dom';

import tempData from './data';
import { EPROTONOSUPPORT } from 'constants';
//组件
export default class Index extends React.Component {
    constructor(props) {
        super(props);    
        
        let initialData = null;//初始化数据
        if (__SERVER__) {
            //如果是当然是服务端执行
            initialData = props.staticContext.initialData || {};
        } else {
            //客户端渲染
            initialData = props.initialData || {};
        }

        this.state={
            page: initialData.page,
            fetchData: initialData.fetchData
        }    
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
                    title:'列表页 - react ssr',
                    keywords:'前端技术江湖',
                    description:'关键词'
                }
            }
        };
    }

    componentDidMount(){
        if(!this.state.fetchData){
            //如果没有数据，则进行数据请求
            Index.getInitialProps().then(res=>{
                this.setState({
                    fetchData:res.fetchData||[],
                    page:res.page
                });
                
                document.title = res.page.tdk.title;
            })
        }
        if(this.state.page && this.state.page.tdk){
            document.title = this.state.page.tdk.title;
        }
    }

    render() {
        //渲染数据

        const {code,data}=this.state.fetchData||{};
        
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