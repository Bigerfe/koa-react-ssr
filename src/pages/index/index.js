import React, {
    Component
} from 'react';

import {Link} from 'react-router-dom';
import utils from '../../common/module/utils';
import './css/index.scss';
import ZzPageBase from '../../zz-base/common/components/zz-page-base';

export default class Index extends ZzPageBase {

    constructor(props,context){
        super(props,context);
    }

    //关闭这个页面的服务端渲染 默认为 false
    static closeThePageSSR=false;

    static async  getInitialProps() {
        return {
            page:{
                tdk:{
                    title:'zz.js',
                    keyword:'关键字',
                    description:'描述'
                }
            }
        }
    }

    componentDidMount(){
        console.log('process.env.IS_DEV', process.env.IS_DEV);

        const mmmSet = new Set();
    }

    render() {
        return <div>
        <Link to="/detail">首页-点跳转到详情页面 123</Link>
        </div>
    }

}
