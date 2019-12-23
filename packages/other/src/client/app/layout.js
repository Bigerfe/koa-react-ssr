import { hot } from 'react-hot-loader/root';

import React from 'react';
import { Link,NavLink } from 'react-router-dom';
 class Index extends React.Component{
    constructor(props){
    super(props);
    }
    
    render(){
    return  <div>
        <NavLink to="/index" style={{ marginLeft: "10px" }} >首页</NavLink>   
        <NavLink style={{ marginLeft: "10px" }} onClick={this.click}  to="/article">列表页</NavLink>
        <NavLink style={{ marginLeft: "10px" }} onClick={this.click} to="/search">搜索页</NavLink>

      {this.props.children} 
        </div>
    }
}
//带入路由信息
export default hot(Index);