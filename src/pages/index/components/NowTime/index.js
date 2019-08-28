/**
 * 时间组件
 */
import React from 'react';


export default class Index extends React.Component{

    constructor(props){
        super(props);
        this.state={
            time:(new Date()).toLocaleTimeString()
        }
    }

    componentDidMount(){
        this.timer = setInterval(() => {
                this.setState({
                    time: (new Date()).toLocaleTimeString()
                })
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    render(){
        return <div>
        {this.state.time}
        </div>
    }

}