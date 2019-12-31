import React from 'react';

import PageWrapper from '../../common/components/page-wrapper';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: props.initialData.page || {},
            fetchData: props.initialData.fetchData
        }
    }

    static async  getInitialProps() {
        return {
            fetchData: null,
            page: {
                tdk: {
                    title: '首页',
                    keywords: '前端技术江湖',
                    description: '前端技术江湖'
                }
            }
        }
    }

    // componentDidMount() {
    //     console.log(this.state.fetchData);
    //     if (!this.state.fetchData) {
    //         //如果没有数据，则进行数据请求
    //         Index.getInitialProps().then(res => {
    //             this.setState({
    //                 fetchData: res.fetchData,
    //                 page: res.page
    //             });

    //             let { tdk } = res.page;
    //             if (tdk) {
    //                 document.title = tdk.title;
    //             }

    //         })
    //     }
    // }

    render() {
        return <div>首页</div>
    }
}

export default PageWrapper(Index);