import React from 'react';
import './index.scss';


export default class Index extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return <div className="content-cop">
        {this.props.children}
        </div>
    }
}