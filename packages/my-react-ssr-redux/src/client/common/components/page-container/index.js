//高阶组件 用于提取重复逻辑

import React from 'react';

let _this = null;

const popStateCallback = () => {
    // 使用popStateFn保存函数防止addEventListener重复注册
    if (_this && _this.getInitialProps) {
        console.log('popStateFn');
        _this.getInitialProps();
    }
};

export default (SourceComponent) => {
    return class HoComponent extends React.Component {
        constructor(props, context) {
            super(props);
            console.log('props', props);
            this.state = {
                initialData: {},
                canClientFetch: false//浏览器端是否需要请求数据
            }
        }

        //用于服务端调用
        static async getInitialProps(ctx) {
            return SourceComponent.getInitialProps ? await SourceComponent.getInitialProps(ctx) : {};
        }

        //用于封装处理
        async getInitialProps() {
            // ssr首次进入页面以及csr/ssr切换路由时才调用组件的getInitialProps方法
            const props = this.props;
            const store = window.__STORE__;//从全局得到 store 
            //兼容不使用 redux 的页面
            const res = props.getInitialData ? await props.getInitialData(store.dispatch) : (
                SourceComponent.getInitialProps? await SourceComponent.getInitialProps():{}
            );

            // this.setState({
            //     initialData: res,
            //     canClientFetch: true
            // });

            let { tdk } = res.page;
            if (tdk) {
                document.title = tdk.title;
            }
        }

        async componentDidMount() {

            _this = this; // 修正_this指向，保证_this指向当前渲染的页面组件
            //注册事件，用于在页面回退的时候触发
            window.addEventListener('popstate', popStateCallback);

            const canClientFetch = this.props.history && this.props.history.action === 'PUSH';//路由跳转的时候可以异步请求数据
            console.log('canClientFetch', canClientFetch);
            if (canClientFetch) {
                await this.getInitialProps();
            }

        }

        render() {
            // 只有在首次进入页面需要将window.__INITIAL_DATA__作为props，路由切换时不需要
            
            console.log('com render');

            const props = {
                initialData: {},
                ...this.props
            };

            //客户端渲染
            if (this.state.canClientFetch) {//需要异步请求数据
                props.initialData = this.state.initialData || {};
            } else {
                props.initialData = this.props.initialData;
            }

            return <SourceComponent  {...props}></SourceComponent>
        }
    }
}