import React from 'react';
import './css/index.scss';
import Panel from './components/Panel';
import utils from '../../common/module/utils';


export default class Index extends React.Component{

    render(){
        return <div>我是详情页面
            <Panel title="数据统计模块1123"></Panel>
        </div>
    }
}