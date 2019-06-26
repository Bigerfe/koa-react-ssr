import React from 'react';


export default class Index extends React.Component {

    componentDidMount(){

        function getComponent() {
            return import(/* webpackChunkName: "lodash" */ 'lodash').then(({
                default: _
            }) => {
                const element = document.createElement('div');

                element.innerHTML = _.join(['Hello', 'webpack'], ' ');

                return element;

            }).catch(error => 'An error occurred while loading the component');
        }


        getComponent().then(component => {
            document.body.appendChild(component);
        })
    }

    render() {
        return <div>
            <li>112121212uiuiuiu</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>4</li>
            <li>4</li>
            <li>4</li>
        </div>
    }

}

