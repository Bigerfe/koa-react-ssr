import React from 'react';
import { Link,NavLink } from 'react-router-dom';
import {withRouter} from 'react-router';
import { hot } from 'react-hot-loader/root';

import './layout.scss';

 class Index extends React.Component{
    constructor(props){
    super(props);
    }
    

    render(){
    return  <div className="layout-box">
        <h1>koa+react+ssr</h1>
      {this.props.children} 
        </div>
    }
}

export default hot(Index);
