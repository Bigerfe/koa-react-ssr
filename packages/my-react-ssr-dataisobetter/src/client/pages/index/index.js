import React from 'react';
import {
    Link
} from 'react-router-dom';
import './index.scss';
import img from '../../public/img.jpg';
import PageContainer from '../../common/components/page-container';


function Index(props) {
        return <div className="page-index-box">
            <p>首页</p>
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
                keywords: '关键词 - koa-react-ssr',
                description: '描述'
            }
        }
    };
}

export default PageContainer(Index); 