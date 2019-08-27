import React, {
    Component
} from 'react';

import { Link } from 'react-router-dom';
import utils from '../../common/module/utils';
import './index.scss';
import BaseComponent from '../../common/base/page-base-com';
import fetch from '../../common/fetch';
import RootContext from '../../app/route-context';

const imghost = 'http://static.pynsk.com/fagmr-com';

export default class Index extends BaseComponent {

    constructor(props, context) {
        super(props,context);
        this.state = {
            ... this.getInitialData(context)
        }
    }

    enableSpaDataCache = false;//开启 spa 数据缓存，刷新页面数据重新请求  

    //得到 context 对象
    static contextType = RootContext;//如果不需要 ssr，则删除此字段

    static async  getInitialProps(krsOpt) {
        let {params} = krsOpt;
        const newsDetailInfo = await fetch.postForm('/fe_api/news-manager/get-news-detail', {
            data: { id: params.id}
        });
       
        const obj = newsDetailInfo.data[0];

        return {
            page: {
                tdk: {
                    title: obj.newTitle,
                    keyword: 2,
                    description: 3
                }
            },
            fetchData: obj
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
     
        if(fetchData){
            return <div className="news-channel">
                <h1>{fetchData.newTitle}</h1>
                <p>{fetchData.subDes}</p>
                <div dangerouslySetInnerHTML={{__html:fetchData.newContent}}></div>
            </div>
        }
        return null;

    }

}
