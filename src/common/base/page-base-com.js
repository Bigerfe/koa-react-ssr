import React from 'react';
export default class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    //获得初始化数据 有数据则表示为服务端渲染
    getInitialData = () => {
        const contextData = this.context && this.context.initialData && this.context.initialData[this.props.match.url];
        if (contextData) {
            return contextData.data;
        }
        return contextData;
    }
}