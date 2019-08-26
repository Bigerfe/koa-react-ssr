import React from 'react';

const WindowsInitDataKey ='_initialData_';
export default class Index extends React.Component {
    constructor(props,context) {
        super(props);
    }

    //获得初始化数据 有数据则表示为服务端渲染
    getInitialData = (context) => {
        const contextData = context && context.initialData && context.initialData[this.props.match.url];
        this.isSSR = false;
        this.hasSpaCacheData = false;//单页数据是否保存
        if (contextData) {
            this.isSSR = true;//表示服务端渲染的首屏
            return  contextData.res;
        }else{
            if(__CLIENT__){
                let wData = window[WindowsInitDataKey] ? window[WindowsInitDataKey][this.props.match.url]:null;
                console.log('wdata',wData);
                if (!wData || !wData.fetchData)
                    return {};
                this.hasSpaCacheData=true;
                return wData;
            }
            return null;
        }
    }

    componentWillUnmount(){
        //组件销毁前
        console.log('unmount');
        //可以把数据存起来，下次在使用

        console.log(this.state);
        console.log(this.isSSR);
        if (!this.isSSR && this.enableSpaDataCache){
            let url =this.props.match.url;

            if (!window[WindowsInitDataKey]) window[WindowsInitDataKey]={};
            
            window[WindowsInitDataKey][url]={
                ...this.state
            }
            
        }
    }
}