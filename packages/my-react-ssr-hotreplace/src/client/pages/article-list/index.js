import React from 'react';
import {
    Link
} from 'react-router-dom';

import "./index.scss";

export default class Index extends React.Component {
        constructor(props) {
            super(props);
            this.state={
                text:'123'
            }
        }
        render() {
            return <div className="article-list">文章列表页

            <input type="text" value={this.state.text}  onChange={(e)=>{
                this.setState({
                    text:e.target.value
                })
            }}/>
            
            </div>
        }
}