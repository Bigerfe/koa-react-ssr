import React from 'react';
import {
    Link
} from 'react-router-dom';
import './index.scss';

export default class Index extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {newsList=[]} = this.props;
        return <div className="com-news-list">
            <h1>新闻中心</h1>
           <ul>
            {
                    newsList.map(item=>{
                        return <li key={item.id}><Link to={"/news/"+item.id}>
                            <p><span> {item.newTitle}</span>
                                <span className="type">{item.addTime.slice(0,10)}</span>
                            </p>
                            </Link>
                        </li>
                    })
            }
           </ul>
        </div>
    }
}