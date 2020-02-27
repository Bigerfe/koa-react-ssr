import React from 'react';
import {
    Link
} from 'react-router-dom';
import css from  './index.scss';
import img from '../../public/img.jpg';
import PageContainer from '../../common/components/page-container';

import withStyles from 'isomorphic-style-loader/withStyles'
import counter from '../../common/utils/test';

console.log('counter', counter());


console.log('counter', counter());


console.log('counter', counter());



console.log('__SERVER__', __SERVER__);

const dom = __SERVER__ ? {}: require('../../common/utils/dom')


function Index(props) {

    console.log(css._getContent());
    console.log(css._getCss());
   
   console.log('dom',dom && dom.default && dom.default.setColor());

        return <div className="page-index-box">
            <p>首页11</p>
            <img src={img} />
        </div>
}



Index.getInitialProps= async ()=>{
    console.log('fetch data index');
    //模拟数据请求方法
    //...

    return {
        page: {
            tdk: {
                title: '首页 - koa-react-ssr',
                keywords: '关键词 koa-react-ssr',
                description: '描述 koa-react-ssr'
            }
        }
    };
}

export default withStyles(css)(PageContainer(Index));
