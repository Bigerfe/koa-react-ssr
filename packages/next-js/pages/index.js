import './index.css';
import Link from 'next/link'
import Head from 'next/head'

import React from 'react';

export default class Index extends React.Component{

    constructor(props){
        super(props);
        this.state={
            v:''
        }
    }


    static async getInitialProps(){
        return {
            data:[1,2,3,4]
        }
    }

    changeHandler=(e)=>{
        console.log(e.target.value);
        this.setState({
            v:e.target.value
        })
    }

    render(){
        console.log(this.state.v);
        return <div className="index-box">
            <Head>
                <title>next.js ssr</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
            </Head>
            <p>Hello Next.js</p>
            <Link href="/about">关于</Link>  <Link href="/index">首页</Link>
            <input type="text" value={this.state.v}  onChange={this.changeHandler} />
        </div>
    }

}
 