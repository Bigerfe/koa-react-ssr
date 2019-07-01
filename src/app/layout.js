import React from 'react';
import { Link } from 'react-router-dom';
import './layout.scss';

export default class Layout extends React.Component{
    render(){

        return <div className="mainIndex">
            <div className="rdContent">
                <div className="mainTop">
                    <ul>
                        <li>
                            <Link to="/index">首页1</Link>
                        </li>
                        <li>
                            <Link to="/detail">详情2</Link>
                        </li>
                        <li>
                            <Link to="/list">列表123</Link>
                        </li>
                    </ul>
                </div>
                <div className="mainTop1">
                    {this.props.children}
                </div>
            </div>
        </div>

    }
}