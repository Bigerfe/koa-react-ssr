import React from 'react';
import './css/index.scss';
import Panel from './components/Panel';
import utils from '../../common/module/utils';
import Button from '../../common/components/button/Button';

export default class Index extends React.Component{

    render(){
        return <div>我是详情页面
            <Panel title="数据统计模块1123"></Panel>
            <Button name="戳我以下，给你奖品"></Button>
        </div>
    }
}