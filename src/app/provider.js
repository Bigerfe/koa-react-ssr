import React,{createContext} from 'react';
import RootContext from './route-context';



export default class Index extends React.Component {
    constructor(props,context) {
        super(props);
        this.state = {
            list:props.initalData.list
        }
    }

    componentDidMount(){
        console.log(this.props);
    }

    changeContext=(data)=>{
       
        // this.setState({
        //    list:[{
        //        id:100,name:
        //    }]
        // });
    }

    render() {
        //TODO:使用了 provider 可以让消费者订阅变化，从而重新渲染
        return <RootContext.Provider value={this.props.initalData||{}}>
            {this.props.children}
        </RootContext.Provider>
    }
}