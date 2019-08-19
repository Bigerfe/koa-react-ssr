import React from 'react';
import RootContext from '../../app/route-context';
import {
    Link
} from 'react-router-dom';
import BaseComponent from '../../common/base/page-base-com';

export default class Index extends  BaseComponent{
    constructor(props,context) {
        super(props);
    }
    //得到 context 对象
    static contextType = RootContext;

    static getInitialProps() {
        return [{
            id: 200,
            name: 'list,哈哈我去，我终于胖了。。。。'
        }]
    }

    render() {
        let contextData = this.getInitialData();
        if(!contextData){
            console.log('cs render');
            contextData = Index.getInitialProps();
        }
        return <React.Fragment>
        
        <Link to="/index">返回首页</Link>
        
        {
                contextData.map(item=>(<div key={item.id}>{item.name}</div>))
        }

        </React.Fragment > 
    }
}