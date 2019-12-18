// src/client/app/layout.js

import React from 'react';
import { Link,NavLink } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

 class Index extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
    return  <div>
        <NavLink to="/index" style={{ marginLeft: "10px" }} >首页</NavLink>   
        <NavLink style={{ marginLeft: "10px" }} onClick={this.click}  to="/article">列表页</NavLink>
      {this.props.children} 
        </div>
    }
}
export default  hot(Index);