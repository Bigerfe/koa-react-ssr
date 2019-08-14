import React from 'react';
import { Link } from 'react-router-dom';
import menuData from './menu';

import './index.scss';

const MENUID='showmenuid';

export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            showMenuId:0
        }
    }

    handleMenuClick(id,e){
        this.setState({
            showMenuId:id
        });
        localStorage.setItem(MENUID,id);
       //e.nativeEvent.preventDefault();
        e.preventDefault();//两个方法都 ok，组织默认行为
    }

    componentDidMount(){
        let mid = localStorage.getItem(MENUID);
        mid && this.setState({
            showMenuId:mid
        })
    }

    render(){
        return menuData.map((item)=>{
          return   <div className="main-menu-f-item" key={item.id}>
                    <a className="fitema" onClick={this.handleMenuClick.bind(this,item.id)}>{item.name}</a>
                        {
                            this.state.showMenuId == item.id ? <div className="fitem-child">
                                {
                                    item.child && item.child.map((citem) => {
                                        return <Link  key={citem.id} to={citem.link}>{citem.name}</Link>

                                    })
                                }
                            </div>:null
                        }
            </div>
        })
    }
}