import React from 'react';
import RootContext from '../../app/route-context';
import {
    Link
} from 'react-router-dom';
export default class Index extends React.Component {
    constructor(props,context) {
        super(props);
    }
    //得到 context 对象
    static contextType = RootContext;

    static getInitialProps() {
        return [{
            id: 200,
            name: '哈哈我去，我终于胖了。。。。'
        }]
    }
    render() {
        return <React.Fragment>
        
        <Link to="/index">返回首页</Link>
        
        {
            this.context.initialData.map(item=>(<div key={item.id}>{item.name}</div>))
        }

        </React.Fragment > 
    }
}