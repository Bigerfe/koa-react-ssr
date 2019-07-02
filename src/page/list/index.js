import React, { Component} from 'react';
import utils from '../../common/module/utils';

export default class Index extends React.Component {
    constructor(props){
        super(props);
        this.state={
            num:0,
            searchComp:null
        }
    }

    componentDidMount(){

        // function getComponent() {
        //     return import(/* webpackChunkName: "form" */ './components/form').then(mod => {
        //         console.log(mod);
        //         return mod.default;
        //     }).catch(error => 'An error occurred while loading the component');
        // }


        // getComponent().then(md => {
        //     console.log('组件加载完成');
        // })


        // require.ensure([], require => {
        //    const Search =  require('./components/search').default;
        //    this.setState({
        //        searchComp:Search
        //    })
        // }, 'search')
    }

    onChange(checked){
        console.log('checked is ',checked);
    }

    render() {

        return <div>
            <li>num:{this.state.num}</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>4</li>
            <li>4</li>
            <li>4</li>
        </div>
    }
}