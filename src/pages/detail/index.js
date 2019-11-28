import React from 'react';
import { Link } from 'react-router-dom';
import utils from '../../common/module/utils';
import RootContext from '../../app/route-context';
import ZzPageBase from '../../zz-base/common/components/zz-page-base';
import fetch from '../../common/fetch';

import './css/index.scss';


function Child(props) {
    return <span style={{ backgroundColor: props.color }}>我是 child  11111</span>
}
export default class Index extends ZzPageBase{

    constructor(props,context){
        super(props,context);
    }

    enableSpaDataCache=true;//开启 spa 数据缓存，刷新页面数据重新请求  

    //得到 context 对象
    static contextType = RootContext;

    //基础参数的带入
    //opt={query:{},params:{}}
    static async getInitialProps(zzOpt){
        
        console.log('=====opt', zzOpt);

        if(__SERVER__){
            //如果是服务端渲染的话  可以做的处理
        }

       const fetch1= fetch.postForm('/fe_api/filed-manager/get-detail-of-type', {
            data: { ofTypeId: 4000 }
        });

       const fecth2= fetch.postForm('/fe_api/filed-manager/get-detail-of-type', {
            data: { ofTypeId: 2000 }
        });

        const resArr =await fetch.multipleFetch(fetch1, fecth2);
        //返回所有数据
        return {
            page:{
                tdk: {
                    title: 'zz 框架',
                    keyword: 'ssr react',
                    description: '我是描述'
                }
            },
            fetchData: resArr
        } 
    }

    componentDidMount(){
        //下面代码可以放入父组件内的声明周期，或者定义成为父组件的成员方法。但是真正的业务场景可能比较复杂，所以这里我提了出来
        console.log('detail com did');
       
        if (!this.isSSR && !this.hasSpaCacheData){// 页面如果是客户端的需要重新获取数据
            Index.getInitialProps(this.props.zzOpt).then(data=>{
                this.setState({
                    ...data
                },()=>{
                    document.title=this.state.page.tdk.title;
                });
            });
        }
    }

    render(){
     
        const {page,fetchData}=this.state;
        const [res] = fetchData||[];

        return <div className="detailBox">
            <Link to="/index">go 首页</Link> |   <Link to="/list">go 列表</Link> |  <Link to="/tudou">go 土豆</Link>
           <Child color={this.context.color}></Child>
           <div>
           {
                    page && <div><span>title:{page.tdk.title}</span>
                    <span>ky:{page.tdk.keyword}</span>
                    </div> 
           }
           </div>
           {
              res && res.data.map(item=>{
                   return <div key={item.id}>{item.keyId}:{item.keyName}---{item.setContent}</div>
               })
           }
           <p>---=-=-=-=-=-</p>
           <div>
              {
              res && res.data.map(item=>{
                   return <div key={item.id}>{item.keyId}:{item.keyName}---{item.setContent}</div>
               })
           }
            </div>   <Link to="/index">首 页</Link>
            <p>---=-=-=-=-=-</p>
            <div>
                {
                    res && res.data.map(item => {
                        return <div key={item.id}>{item.keyId}:{item.keyName}---{item.setContent}</div>
                    })
                }
            </div>
            <p>---=-=-=-=-=-</p>
            <div>
                {
                    res && res.data.map(item => {
                        return <div key={item.id}>{item.keyId}:{item.keyName}---{item.setContent}</div>
                    })
                }
            </div>   <Link to="/index">首 页</Link>
            <p>---=-=-=-=-=-</p>
            <div>
                {
                    res && res.data.map(item => {
                        return <div key={item.id}>{item.keyId}:{item.keyName}---{item.setContent}</div>
                    })
                }
            </div>
            <p>---=-=-=-=-=-</p>
            <div>
                {
                    res && res.data.map(item => {
                        return <div key={item.id}>{item.keyId}:{item.keyName}---{item.setContent}</div>
                    })
                }
            </div>
            <p>---=-=-=-=-=-</p>
            <div>
                {
                    res && res.data.map(item => {
                        return <div key={item.id}>{item.keyId}:{item.keyName}---{item.setContent}</div>
                    })
                }
            </div>   <Link to="/index">首 页</Link>
            <p>---=-=-=-=-=-</p>
            <div>
                {
                    res && res.data.map(item => {
                        return <div key={item.id}>{item.keyId}:{item.keyName}---{item.setContent}</div>
                    })
                }
            </div>
            <p>---=-=-=-=-=-</p>
            <div>
                {
                    res && res.data.map(item => {
                        return <div key={item.id}>{item.keyId}:{item.keyName}---{item.setContent}</div>
                    })
                }
            </div>   <Link to="/index">首 页</Link>
            <p>---=-=-=-=-=-</p>
            <div>
                {
                    res && res.data.map(item => {
                        return <div key={item.id}>{item.keyId}:{item.keyName}---{item.setContent}</div>
                    })
                }
            </div>
            <p>---=-=-=-=-=-</p>
            <div>
                {
                    res && res.data.map(item => {
                        return <div key={item.id}>{item.keyId}:{item.keyName}---{item.setContent}</div>
                    })
                }
            </div>   <Link to="/index">首 页</Link>
            <p>---=-=-=-=-=-</p>
            <div>
                {
                    res && res.data.map(item => {
                        return <div key={item.id}>{item.keyId}:{item.keyName}---{item.setContent}</div>
                    })
                }
            </div>
            <p>---=-=-=-=-=-</p>
            <div>
                {
                    res && res.data.map(item => {
                        return <div key={item.id}>{item.keyId}:{item.keyName}---{item.setContent}</div>
                    })
                }
            </div>
            <Link to="/index">首 页</Link>
        </div>
    }
}

