import React from 'react';
import './css/index.scss';
import Panel from './components/Panel';
import utils from '../../common/module/utils';

import { Button } from 'antd';


export default class Index extends React.Component{

    render(){
        return <div>我是详情页面
            <Panel title="数据统计模块1123"></Panel>
            <Button type="primary">Primary</Button>
            <Button>Default</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="danger">Danger</Button>
            <Button type="link">Link</Button>
        </div>
    }
}