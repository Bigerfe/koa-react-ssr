// /src/client/app/provider.js
//自定义 provider 组件
//实现数据的跨组件传输

import React,{createContext} from 'react';
import RootContext from './root-context';

export default class Index extends React.Component {
    constructor(props,context) {
        super(props);
    }

    componentDidMount(){

    }

    changeContext=(data)=>{

    }

    render() {
        //使用了 provider 可以让消费者订阅变化，从而重新渲染
        return <RootContext.Provider value={this.props.initialData||{}}>
            {this.props.children}
        </RootContext.Provider>
    }
}