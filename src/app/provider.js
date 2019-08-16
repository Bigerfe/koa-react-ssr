import React,{createContext} from 'react';
import RootContext from './route-context';



export default class Index extends React.Component {
    constructor(props,context) {
        super(props);
        this.state = {
            color:'red'
        }
    }

    changeContext=(data)=>{
       
        this.setState({
            color:'blue'
        });
    }



    render() {
        //TODO:使用了 provider 可以让消费者订阅变化，从而重新渲染
        return <RootContext.Provider value={{color:this.state.color,changeContext:this.changeContext}}>
            {this.props.children}
        </RootContext.Provider>
    }
}