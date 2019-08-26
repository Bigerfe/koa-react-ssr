import React, {
    Component
} from 'react';

import { Link } from 'react-router-dom';
import utils from '../../common/module/utils';
import './css/index.scss';
import BaseComponent from '../../common/base/page-base-com';
import fetch from '../../common/fetch';
import RootContext from '../../app/route-context';
import ProList from './component/pro-list';
export default class Index extends BaseComponent {

    constructor(props, context) {
        super(props,context);
        this.state = {
            ... this.getInitialData(context)
        }
    }
    enableSpaDataCache = true;//开启 spa 数据缓存，刷新页面数据重新请求  

    //得到 context 对象
    static contextType = RootContext;

    static async  getInitialProps(krsOpt) {

        let { query, params } = krsOpt;
 
        const productsList = await fetch.postForm('/fe_api/products/fe-get-products-list', {
            data: { currentIndex: 1 }
        });
        return {
            page: {
                tdk: {
                    title: '产品列表',
                    keyword: 2,
                    description: 3
                }
            },
            fetchData:productsList.data||[]
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
        const proList = fetchData || [];
        if (fetchData) {
            return <React.Fragment>
                <ProList proList={proList}></ProList>
            </React.Fragment>
        }
        return null;
    }

}
