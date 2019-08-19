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

    static getInitialProps() {
        return [{
            id: 100,
            name: 'this is detail page'
        }]
    }

    componentDidMount(){
        console.log('process.env.IS_DEV', process.env.IS_DEV);
    }

    render() {
        return <div>
        <Link to="/detail">go详情</Link>
        </div>
    }

}
