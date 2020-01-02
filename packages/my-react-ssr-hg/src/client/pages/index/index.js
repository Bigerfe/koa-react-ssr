import React from 'react';

import PageWrapper from '../../common/components/page-wrapper';

export default class Index extends React.Component {
    constructor(props) {
        super(props);
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

    render() {
        return <div>首页</div>
    }
}

