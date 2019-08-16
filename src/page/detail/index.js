import React,{useContext} from 'react';
import './css/index.scss';
import Panel from './components/Panel';
import utils from '../../common/module/utils';
import RootContext from '../../app/route-context';


function Child(props) {
    return <div style={{ backgroundColor: props.color }}>我是 child  11111</div>
}
export default class Index extends React.Component{

    constructor(props){
        super(props);
        console.log(this.props);
    }
    //得到 context 对象
    static contextType = RootContext;

    static fetchData(){
        return {
            a:400
        }
    }

    componentDidMount(e){
        console.log(this.context);
    }

    handClick=()=>{
        this.context.changeContext();
    }

    render(){
        return <div>
            <Panel title="详情页面 数据统计模块1123"></Panel>
            <div style={{backgroundColor:this.context.color}}>这个是 context 拿到的值</div>
           <ul>
           {
               this.props.list && this.props.list.map(item=>{
                   return <li key={item.id}>{item.title}</li>
               })
           }
           </ul>
           <button type="button" onClick={this.handClick}>更新</button>
           <Child color={this.context.color}></Child>
        </div>
    }
}

