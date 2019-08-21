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
            我是 layout，你们显示我就会显示。
            {this.props.children || null}
        </div>
    }
}