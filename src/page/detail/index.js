import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import './css/index.scss';
import Panel from './components/Panel';
import utils from '../../common/module/utils';
import RootContext from '../../app/route-context';


function Child(props) {
    return <span style={{ backgroundColor: props.color }}>我是 child  11111</span>
}
export default class Index extends React.Component{

    constructor(props,context){
        super(props);
        console.log('constructor');
        console.log(this.props);
        console.log(context);
    }
    //得到 context 对象
    static contextType = RootContext;

    static getInitialProps(){
        return [{
            id:100,
            name:'this is detail page'
        }]
    }

    componentDidMount(){
       console.log('detail com did');
       
    }

    handClick=()=>{
        this.context.changeContext();
    }

    render(){
        console.log('detail render');
        return <div>
            <Link to="/index">go 首页</Link> |   <Link to="/list">go 列表</Link>
            <Panel title="详情页面 数据统计模块1123"></Panel>
           <button type="button" onClick={this.handClick}>更新</button>
           <Child color={this.context.color}></Child>
            {
                this.context.initialData.map(item=>(<div key={item.id}>{item.name}</div>))
            }
        </div>
    }
}

