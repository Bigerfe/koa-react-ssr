import React, {
    Component
} from 'react';

import {Link} from 'react-router-dom';
import utils from '../../common/module/utils';
import './css/index.scss';
import KrsPageBase from '../../krs-base/common/components/krs-page-base';

export default class Index extends KrsPageBase {

    constructor(props,context){
        super(props,context);
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
        <Link to="/detail">首页，点击跳转到详情页面 123</Link>
        </div>
    }

}
