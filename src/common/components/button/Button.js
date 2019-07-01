import React from 'react';
import './button.scss';
export default class Index extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return <div className="button_01">{this.props.name||''}</div>
    }

}