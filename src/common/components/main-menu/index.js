/**
 * 管理页面的菜单组件
 */
import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './menu';
import './index.scss';
export default class Index extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return <div className="mainmenu-layout">
                    <div className="top">the is bgm 111</div>
                    <div className="core-layout">
                        <div className="menus">
                            <Menu></Menu>
                        </div>
                        <div className="content">
                                {this.props.children}
                        </div>
                    </div>
                </div>
    }
}