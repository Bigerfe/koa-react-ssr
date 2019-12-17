import React from 'react';
import { Link,NavLink } from 'react-router-dom';
import {withRouter} from 'react-router';
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
//带入路由信息
export default withRouter(Index);