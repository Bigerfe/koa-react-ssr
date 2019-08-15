import React from 'react';
import './css/index.scss';
import Panel from './components/Panel';
import utils from '../../common/module/utils';


export default class Index extends React.Component{

    constructor(props){
        super(props);
        console.log('init');
        console.log(this.props);
    }

    static fetchData(){
        return {
            a:400
        }
    }

    componentDidMount(e){
        console.log('mount',e);
    }

    render(){
        return <div>详情页面
            <Panel title="数据统计模块1123"></Panel>
        </div>
    }
}