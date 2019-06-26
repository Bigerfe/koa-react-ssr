import React from 'react';
import './index.scss';

export default class Index extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return <div className="panelName">{this.props.title}</div>
    }
}