import React from 'react';
import PageNav from '../../common/components/page-nav';
import Content from '../../common/components/content';
import './index.scss';

const NAV={
    mainMenuName:'系统设置',
    childMenuName:'网站设置'
}
export default class Index extends React.Component{

    render(){
        return <div className="websiteinfo-page">
            <PageNav {...NAV}></PageNav>
            <Content>内容</Content>
        </div>
       
    }

}