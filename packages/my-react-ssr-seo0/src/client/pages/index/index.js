import React from 'react';
import {
    Link
} from 'react-router-dom';


export default class Index extends React.Component {
    constructor(props) {
        super(props);
        const initData = props.initialData || {};
        this.state={
            page:initData.page,
            fetchData:initData.fetchData
        }
    }

    static async  getInitialProps() {
        console.log('fetch data index');
        //模拟数据请求方法
        //...

        return {
            page:{
                tdk:{
                    title:'首页 - react ssr',
                    keywords:'前端技术江湖',
                    description:'关键词'
                }
            }
        };
    }

    componentDidMount() {
        if (!this.state.fetchData) {
            //如果没有数据，则进行数据请求
            Index.getInitialProps().then(res => {
                this.setState({
                    fetchData: res.fetchData || [],
                    page:res.page
                });

                document.title = res.page.tdk.title;
            })
        }

        if (this.state.page && this.state.page.tdk) {
            document.title = this.state.page.tdk.title;
        }
    }



    render() {
        return <div>首页</div>
    }
}