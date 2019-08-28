import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './css/index.scss';
import RootContext from '../../app/route-context';
import KrsPageBase from '../../krs-base/common/components/krs-page-base';
import fetch from '../../common/fetch';


export default class Index extends KrsPageBase {

    constructor(props, context) {
        super(props, context);
    }

    enableSpaDataCache = true;//开启 伪 pwa 支持

    //得到 context 对象
    static contextType = RootContext;

    //基础参数的带入
    //krsOpt={query:{},params:{}}
    static async getInitialProps(krsOpt) {
        if (__SERVER__) {
            //如果是服务端渲染的话  可以做一些处理
        }

        //以下代码仅供参考
        // const fetch1 = fetch.postForm('/api/url1', {
        //     data: { ofTypeId: 4000 }
        // });

        // const fecth2 = fetch.postForm('/api/url2', {
        //     data: { ofTypeId: 2000 }
        // });

        // const resArr = await fetch.multipleFetch(fetch1, fecth2);

        const resArr=[{data:[
            { id: 1, name: '哈喽 krs 框架1' },
            {id:2,name:'krs 框架1'},
            { id: 2, name: 'krs 框架2' }
        ]}];

        //返回所有数据
        return {
            page: {
                tdk: {
                    title: 'ksr 框架',
                    keyword: 'ssr react',
                    description: '一个轻量的 ssr 开发框架'
                }
            },
            fetchData: resArr
        }
    }

    componentDidMount() {
        //下面代码可以放入父组件内的声明周期，或者定义成为父组件的成员方法。但是真正的业务场景可能比较复杂，所以这里我提了出来

        if (!this.isSSR && !this.hasSpaCacheData) {// 页面如果是客户端的需要重新获取数据
            Index.getInitialProps(this.props.krsOpt).then(data => {
                this.setState({
                    ...data
                }, () => {
                    //设置页面 tdk
                    document.title = this.state.page.tdk.title;
                });
            });
        }
    }

    render() {

        const { page, fetchData } = this.state;
        const [res] = fetchData || [];

        return <div className="5656-wrapper-box">
            <h1>当前页面：5656</h1>
            {
                res && res.data.map(item => {
                    return <div key={item.id}>{item.name}</div>
                })
            }
        </div>
    }
}

