import React from 'react';
import { Link } from 'react-router-dom';
export default class Index extends React.Component{
    constructor(props){
    super(props);
    }
    render(){
    return  <div>
        <Link to="/index">首页</Link>  <Link to="/article">列表页</Link>
      {this.props.children} 
        </div>
    }
}