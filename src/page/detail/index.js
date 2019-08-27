import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import './css/index.scss';
import Panel from './components/Panel';
import utils from '../../common/module/utils';
import RootContext from '../../app/route-context';
import KrsPageBase from '../../krs-base/common/components/krs-page-base';
import fetch from '../../common/fetch';


function Child(props) {
    return <span style={{ backgroundColor: props.color }}>我是 child  11111</span>
}
export default class Index extends KrsPageBase{

    constructor(props,context){
        super(props,context);
    }

    enableSpaDataCache=true;//开启 spa 数据缓存，刷新页面数据重新请求  

    //得到 context 对象
    static contextType = RootContext;

    //基础参数的带入
    //opt={query:{},params:{}}
    static async getInitialProps(krsOpt){
        
        console.log('=====opt', krsOpt);

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
    }

    componentDidMount(){
        
        console.log('detail com did');
       
        if (!this.isSSR && !this.hasSpaCacheData){// 页面如果是客户端的需要重新获取数据
            Index.getInitialProps(this.props.krsOpt).then(data=>{
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
            <Panel title="详情页面 数据统计模块1123"></Panel>
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

