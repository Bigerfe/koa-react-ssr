import React from 'react';
import './index.scss';

export default class Index extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return <div className="panelName">{this.props.title} <span>我是 panel</span> </div>
    }
}