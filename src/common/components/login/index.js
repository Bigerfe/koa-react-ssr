import React from 'react';
import './index.scss';

export default class Index extends React.Component{
    constructor(props){
        super(props);
    }

    handleLogin=(e)=>{
        console.log('1');
        this.props.handleLogin();
    }

    render(){
        return <div className="login-layout">
            <button type="button" onClick={this.handleLogin}>登 录</button>
        </div>
    }
}