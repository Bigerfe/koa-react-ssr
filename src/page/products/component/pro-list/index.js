import React from 'react';
import {
    Link
} from 'react-router-dom';
import './index.scss';

const imghost = 'http://static.pynsk.com/fagmr-com';
export default class Index extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {proList=[]} = this.props;
        return <div className="com-products-list">
            <h1>产品列表</h1>
           <ul>
            {
                    proList.map(item=>{
                        return <li key={item.id}><Link to={'/products/'+item.id}>
                            <img src={imghost + item.headPic}/>
                            <p><span> {item.ofTypeName} {item.newModel} {item.brandName}</span>
                            <span className="type">类型：{item.ofTypeName}</span>
                            <span className="brand">品牌：{item.brandName}</span>
                            </p>
                            </Link>
                        </li>
                    })
            }
           </ul>
        </div>
    }
}