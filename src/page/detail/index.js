import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import './css/index.scss';
import Panel from './components/Panel';
import utils from '../../common/module/utils';
import RootContext from '../../app/route-context';
import BaseComponent from '../../common/base/page-base-com';

function Child(props) {
    return <span style={{ backgroundColor: props.color }}>我是 child  11111</span>
}
export default class Index extends BaseComponent{

    constructor(props,context){
        super(props);
        console.log('constructor');
        console.log(this.props);
        console.log(context);
    }

    //得到 context 对象
    static contextType = RootContext;

    static getInitialProps(){
        if(__SERVER__){
            //如果是服务端渲染的话
        }
        return {
            page:{
                tdk:{
                    title:'ksr 框架',
                    keyword:'ssr react',
                    description:'我是描述'
                }
            },
            list: [{
                    id: 100,
                    name: '做一件事之前'
                }, {
                    id: 200,
                    name: 'hhaha'
                }, {
                    id: 300,
                    name: '考虑好做什么'
                },
                {
                    id: 400,
                    name: '脑子里想一个步骤'
                },
                {
                    id: 500,
                    name: '然后想好每天做那一步，然后想清楚，'
                },
                {
                    id: 600,
                    name: '好了，你以你已经成功一伴儿了'
                }
            ]
        } 
    }

    componentDidMount(){
       console.log('detail com did');
       
    }

    handClick=()=>{
        this.context.changeContext();
    }

    render(){
        console.log('detail render');
        let contextData =this.getInitialData();
        if(!contextData){
            contextData = Index.getInitialProps();
        }
        const { page, list } = contextData;


        return <div className="detailBox">
            <Link to="/index">go 首页</Link> |   <Link to="/list">go 列表</Link> |  <Link to="/tudou">go 土豆</Link>
            <Panel title="详情页面 数据统计模块1123"></Panel>
           <button type="button" onClick={this.handClick}>更新</button>
           <Child color={this.context.color}></Child>
            {
                list.map(item=>(<div key={item.id}>{item.name}</div>))
            }
            <img src='./img/logo.png'/>
            <div className="bg"></div>
        </div>
    }
}

