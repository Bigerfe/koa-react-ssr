import React from 'react';
import {
    Link
} from 'react-router-dom';


export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }

    static async  getInitialProps() {
        console.log('fetch data index');
        //模拟数据请求方法
        //...

        return {};
    }

    componentDidMount() {
        if (!this.state.data) {
            //如果没有数据，则进行数据请求
            Index.getInitialProps().then(res => {
                this.setState({
                    data: res.data || []
                })
            })
        }
    }



    render() {
        return <div>首页</div>
    }
}