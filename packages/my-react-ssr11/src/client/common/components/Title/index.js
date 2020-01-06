import React from 'react';
import {
    Link
} from 'react-router-dom';

import css from  './index.scss';
import withStyles from 'isomorphic-style-loader/withStyles'

 class Index extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div className="big-title">标题2</div>
    }
}

export default withStyles(css)(Index);