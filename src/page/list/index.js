import React, { Component} from 'react';

export default class Index extends React.Component {
    constructor(props){
        super(props);
        this.state={
            num:0,
            searchComp:null
        }
    }

    componentDidMount(){

        function getComponent() {
            return import(/* webpackChunkName: "form" */ './components/form').then(mod => {
                console.log(mod);
                return mod.default;
            }).catch(error => 'An error occurred while loading the component');
        }


        getComponent().then(md => {
            console.log('组件加载完成');
            console.log(md);
        })


        require.ensure([], require => {
           const Search =  require('./components/search').default;
           this.setState({
               searchComp:Search
           })
        }, 'search')
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