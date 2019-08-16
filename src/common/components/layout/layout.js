import React from 'react';
import { Link } from 'react-router-dom';
import MainMenu from  '../main-menu';
import Login from '../login';
import './layout.scss';

export default class Layout extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLogin:true
        }
    }

    handleLogin=(e)=>{
        this.setState({
            isLogin:true
        });
    }

    render(){
        return this.state.isLogin? <MainMenu>
                    {this.props.children}
        </MainMenu> : <Login handleLogin={this.handleLogin}></Login>
    }
}