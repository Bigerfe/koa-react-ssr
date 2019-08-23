import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import './css/index.scss';
import Panel from './components/Panel';
import utils from '../../common/module/utils';
import RootContext from '../../app/route-context';
import BaseComponent from '../../common/base/page-base-com';
import fetch from '../../common/fetch';


function Child(props) {
    return <span style={{ backgroundColor: props.color }}>我是 child  11111</span>
}
export default class Index extends BaseComponent{

    constructor(props,context){
        super(props);
        console.log('constructor');
        console.log(this.props);
        console.log('context',context);
        this.state = {
            ... this.getInitialData(context)
        }

        console.log('this init state',this.state);
       
        console.log('this.isssr', this.isSSR);

    }

    //得到 context 对象
    static contextType = RootContext;

    static async getInitialProps(){
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
                    title: 'ksr 框架',
                    keyword: 'ssr react',
                    description: '我是描述'
                }
            },
            fetchData: resArr
        } 

        // return {
        //     page:{
     
        //     },
        //     list: [{
        //             id: 100,
        //             name: '做一件事之前'
        //         }, {
        //             id: 200,
        //             name: 'hhaha'
        //         }, {
        //             id: 300,
        //             name: '考虑好做什么'
        //         },
        //         {
        //             id: 400,
        //             name: '脑子里想一个步骤'
        //         },
        //         {
        //             id: 500,
        //             name: '然后想好每天做那一步，然后想清楚，'
        //         },
        //         {
        //             id: 600,
        //             name: '好了，你以你已经成功一伴儿了'
        //         }
        //     ]
        // } 
    }

    componentDidMount(){
        console.log('detail com did');
       
        if (!this.isSSR && !this.hasSpaCacheData){// 页面如果是客户端的需要重新获取数据
            Index.getInitialProps().then(data=>{
                this.setState({
                    ...data
                });
            });
        }
    }

    handClick=()=>{
        this.context.changeContext();
    }

    render(){
     
        const {page,fetchData}=this.state;
        const [res] = fetchData||[];

        return <div className="detailBox">
            <Link to="/index">go 首页</Link> |   <Link to="/list">go 列表</Link> |  <Link to="/tudou">go 土豆</Link>
            <Panel title="详情页面 数据统计模块1123"></Panel>
           <button type="button" onClick={this.handClick}>更新</button>
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
        </div>
    }
}

