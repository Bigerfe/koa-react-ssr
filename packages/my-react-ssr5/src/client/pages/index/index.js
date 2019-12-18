//src/client/pages/index/index.js
//index 组件
import './index.scss';
import React,{useContext} from 'react';
import {Link} from 'react-router-dom';
import RootContext from '../../app/root-context';
import tempData from './data';
import Title from '../../common/components/Title';



//组件
class Index extends React.Component {
    constructor(props,context) {
        super(props,context);
        this.state=context;//context即为服务端返回的数据，初始化 state.用于 render 方法内进行渲染
    }


    //得到 context 对象
    static contextType = RootContext;

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

    componentDidMount(){
        if(!this.state.data){
            //如果没有数据，则进行数据请求
            Index.getInitialProps().then(res=>{
                this.setState({
                    data:res.data||[]
                })
            })
        }
    }

    render() {
        //渲染数据

        const {code,data}=this.state;
        
        return <div className="index-content">
            <Title></Title>
            <p className="img"></p>
        {data && data.map((item,index)=>{
            return <div className="item" key={index}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
            </div>
        })}
        {!data&&<div>暂无数据1212</div>}
        </div>
    }
}

export default Index;
