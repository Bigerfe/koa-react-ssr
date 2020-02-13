//list 组件
import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

export default class Index extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {list=[]} = this.props;

        return <div className="book-list">
            {
                 list.map(item=>{
                    return <div key={item.id} className="item">
                        <p className="img"></p>
                    <div className="right">
                            <p className="title"><Link to={"/detail/" + item.id}>{item.title}</Link></p>
                            <p className="des">{item.des}</p>
                    </div>
                    </div>
                })
            }
        </div>
    }
}