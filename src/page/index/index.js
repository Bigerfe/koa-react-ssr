import React, {
    Component
} from 'react';

import {Link} from 'react-router-dom';
import utils from '../../common/module/utils';
import './css/index.scss';
import BaseComponent from '../../common/base/page-base-com';
import fetch from '../../common/fetch';
import RootContext from '../../app/route-context';
import ProList from './components/pro-list';
import NewsList from './components/new-list';

export default class Index extends BaseComponent {

    constructor(props,context){
        super(props,context);
        this.state = {
            ... this.getInitialData(context)
        }
    }
    enableSpaDataCache = true;//开启 spa 数据缓存，刷新页面数据重新请求  

    //得到 context 对象
    static contextType = RootContext;


    static async  getInitialProps(krsOpt) {
        let {query,params} = krsOpt;

        const websiteBaseInfo =await fetch.postForm('/fe_api/filed-manager/get-common-info',{
            data:{}
        });

        const productsList = await fetch.postForm('/fe_api/products/fe-get-products-list', {
            data: { currentIndex: 1 }
        });

        const listInfo = await fetch.postForm('/fe_api/news-manager/get-all-news',{
            data: { currentIndex: 1, ofClassId: 1000}
        });

       const baseInfo = websiteBaseInfo.data;

        return {
            page:{
                tdk:{
                    title: 'krs ssr 服务端渲染框架-demo 参考',
                    keyword: 'krs ssr react 服务端渲染',
                    description:'最轻量级，最易用的 ssr react 服务端渲染框架',
                }
            },
            fetchData:[websiteBaseInfo,productsList,listInfo]
        }
    }

    componentDidMount(){

        if (!this.isSSR && !this.hasSpaCacheData) {// 页面如果是客户端的需要重新获取数据
            Index.getInitialProps(this.props.krsOpt).then(data => {
                this.setState({
                    ...data
                }, () => {
                    document.title = this.state.page.tdk.title;
                });
            });
        }
    }

    render() {
        const { page, fetchData } = this.state;
        const [baseinfo,proList,newsList] = fetchData || [];
        if(fetchData){
            return <React.Fragment>
                <ProList proList={proList.data}></ProList>
                <NewsList newsList={newsList.data}></NewsList>
            </React.Fragment>
        }
        return null;
    }

}
