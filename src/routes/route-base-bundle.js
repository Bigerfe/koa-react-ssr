
import React from 'react';

/**
 * 动态加载组件一个容器组件
 *
 * @class Bundle
 * @extends {Component}
 */
export default class Bundle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mod: null
        };
    }

    //即将废弃
    UNSAFE_componentWillMount() {
        if (!this.state.mod) {
            console.log('async did mount');
            this.load(this.props);
        }
    }

    // componentDidMount(){
    //     if(!this.state.mod){
    //         console.log('async did mount');
    //         this.load(this.props);
    //     }
    // }

    // componentWillReceiveProps(nextProps) {
    //     //TODO://问题在这里，导致每次都会重新渲染组件
    //     console.log(nextProps.load);
    //     console.log(this.props.load);
    //     console.log(nextProps.load == this.props.load);
    //     if (nextProps.load !== this.props.load) {
    //         this.load(nextProps)
    //     }
    // }

    load(props) {
        this.setState({
            mod: null
        });
        //注意这里，使用Promise对象; mod.default导出默认
        props.load().then((mod) => {
            this.setState({
                mod: mod.default ? mod.default : mod
            });
        });
    }

    render() {
        return this.state.mod ? this.props.children(this.state.mod) : <NewPageLoading/>;
    }
}


function NewPageLoading() {
    return <div>loading.....</div>
}