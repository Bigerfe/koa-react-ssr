import React from 'react';
import './index.scss';

export default class Index extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return <div className="page-nav-wrapper">
            <span className="main">{this.props.mainMenuName}</span> / <span className="child">{this.props.childMenuName}</span>
        </div>
    }

}