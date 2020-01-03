//src/client/pages/list/index.js
//index 组件

import React from 'react';
import {Link} from 'react-router-dom';

import tempData from './data';
import { EPROTONOSUPPORT } from 'constants';
//list 页面 组件
export default class Index extends React.Component {
    constructor(props,context) {
        super(props);        
        this.state=props.initialData||{};

        console.log('props',props);
        console.log('context', context);
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

        return res;
    }

    // componentDidMount(){
    //     if(!this.state.data){
    //         //如果没有数据，则进行数据请求
    //         Index.getInitialProps().then(res=>{
    //             this.setState({
    //                 data:res.data||[]
    //             })
    //         })
    //     }
    // }

    render() {
        //渲染数据

        const {code,data}=this.state;
        
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