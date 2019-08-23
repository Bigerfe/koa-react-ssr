import React, {
    Component
} from 'react';

import {Link} from 'react-router-dom';
import utils from '../../common/module/utils';
import './css/index.scss';
import BaseComponent from '../../common/base/page-base-com';

export default class Index extends BaseComponent {

    constructor(props,context){
        super(props);
    }

    static async  getInitialProps() {
        return {
            page:{
                tdk:{
                    title:1,
                    keyword:2,
                    description:3
                }
            }
        }
    }

    componentDidMount(){
        console.log('process.env.IS_DEV', process.env.IS_DEV);
    }

    render() {
        return <div>
        <Link to="/detail">当前时首页，点击跳转到详情页面</Link>
        </div>
    }

}
