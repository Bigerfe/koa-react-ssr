import React, {
    Component
} from 'react';

import {Link} from 'react-router-dom';
import utils from '../../common/module/utils';
import './css/index.scss';

export default class Index extends Component {

    constructor(props,context){
        super(props);
    }

    componentDidMount(){
        //console.log('__DEV__', __DEV__);
    }

    render() {
        return <div>
        <Link to="/detail">go详情</Link>
        </div>
    }

}
