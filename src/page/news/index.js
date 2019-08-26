import React, {
    Component
} from 'react';

import { Link } from 'react-router-dom';
import utils from '../../common/module/utils';
import './index.scss';
import BaseComponent from '../../common/base/page-base-com';
import fetch from '../../common/fetch';
import RootContext from '../../app/route-context';
import NewList from './component/new-list';
export default class Index extends BaseComponent {

    constructor(props, context) {
        super(props, context);
        this.state = {
            ... this.getInitialData(context)
        }
    }
    enableSpaDataCache = false;//开启 spa 数据缓存，刷新页面数据重新请求  

    //得到 context 对象
    static contextType = RootContext;

    static async  getInitialProps(krsOpt) {

        let { query, params } = krsOpt;

        const listInfo = await fetch.postForm('/fe_api/news-manager/get-all-news', {
            data: { currentIndex: 1, ofClassId: 1000 }
        });
        const listInfo1 = await fetch.postForm('/fe_api/news-manager/get-all-news', {
            data: { currentIndex: 2, ofClassId: 1000 }
        });

        return {
            page: {
                tdk: {
                    title: '新闻中心',
                    keyword: 2,
                    description: 3
                }
            },
            fetchData: listInfo.data.concat(listInfo1.data) || []
        }
    }

    componentDidMount() {
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
        const newList = fetchData || [];
        if (fetchData) {
            return <div className="new-channel">
                <NewList newsList={newList}></NewList>
            </div>
        }
        return null;
    }

}
