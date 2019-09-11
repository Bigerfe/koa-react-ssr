/***
 * author:bigerfe.com
 * 页面 page 容器组件的父组件
 * 所有页面都需要继承此组件
 * 此组件包含了基础的通用的功能，可以节省一些开发量
 * 
 * **/
import React from 'react';

const WindowsInitDataKey ='_initialData_';
export default class Index extends React.Component {
    constructor(props,context) {
        super(props,context);
        console.log('base constructor');
        this.state = {
            ... this.getInitialData(context)
        }

        console.log('this.isssr', this.isSSR);
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
                if (!wData)
                    return {};
                this.hasSpaCacheData=true;
                return wData;
            }
            return null;
        }
    }

    componentDidMount(){
        console.log('father did mount');
    }

    componentWillUnmount(){
        //组件销毁前
        console.log('unmount');
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