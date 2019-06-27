/**
 * 基于react-routerd的路由
 */

import React,{Component} from 'react';
import { Router, Route, BrowserRouter, Switch } from 'react-router-dom';
import Layout from '../app/layout';


class Bundle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mod: null
        };
    }

    componentWillMount() {
        this.load(this.props)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.load !== this.props.load) {
            this.load(nextProps)
        }
    }

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
        return this.state.mod?this.props.children(this.state.mod) : null;
    }
}

const rsConfig = [{
    path:'/detail',
    chunkName:'chunk-detail',
    chunkPath:'../page/detail/index'
}];

const chunkStr=(route)=>{
    return `/*webpackChunkName:"${route.chunkName}"*/'${route.chunkPath}'`
}
//TODO:router4的用法很奇怪了，这里虽然实现了但是不解
const CompDetail = (props) => (
    <Bundle load={() => import(/*webpackChunkName:"chunk-detail"*/'../page/detail/index')}>
        {(Detail) => <Detail {...props} />}
    </Bundle>
);

const CompIndex = (props) => (
    <Bundle load={() => import(/*webpackChunkName:"chunk-index"*/'../page/index/index')}>
        {(CompIndex) => <CompIndex {...props} />}
    </Bundle>
);

const CompList = (props) => (
    <Bundle load={() => import(/*webpackChunkName:"chunk-list"*/'../page/list/index')}>
        {(CompList) => <CompList {...props} />}
    </Bundle>
);

export default class Index extends React.Component{
    render(){
        return <BrowserRouter>
            <Layout>
                <Switch>
                    <Route path="/" exact={true} component={CompIndex}></Route>
                    <Route path="/index" exact={true} component={CompIndex}></Route>
                    <Route path="/detail" exact={true} component={CompDetail}></Route>
                    <Route path="/list" exact={true} component={CompList} ></Route>
                    
                </Switch>
                </Layout>
            </BrowserRouter>
    }
}
