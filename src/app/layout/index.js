import React from 'react';
import {
    Link
} from 'react-router-dom';
export default class Index extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div className="layout-box">
            我是 layout，我永远都会被你看到。
            {this.props.children || null}
        </div>
    }
}