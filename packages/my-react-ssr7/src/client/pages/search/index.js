import React from 'react';
import {
    Link
} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import "./index.scss";

export default class Index extends React.Component {
        constructor(props) {
            super(props);
            this.state={
                text:'abc'
            }
        }

    static async  getInitialProps() {
        return {
            page:{
                tdk:{
                    title:'搜索页',
                    keywords:'关键词',
                    description:'描述'
                }
            }
        }
    }

    componentDidMount(){
    }

        textChangeHandler=(e)=>{
            console.log(e.target.value);
            this.setState({
                text: e.target.value
            })
        }

        render() {
            return <div className="search-page">
               <Helmet>
                <title>搜索页</title>
                <meta name="description" content="前端技术江湖,终身学习"/>
                  <meta name="keywords" content="前端技术江湖"/>
                </Helmet>
                <h2>搜索页面3</h2>
            
                <input type="text" value={this.state.text} onChange={this.textChangeHandler}/>
        
            </div>
        }
}