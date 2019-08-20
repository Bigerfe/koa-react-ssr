//页面的路由配置，可配置动态加载信息，必须返回Bundle 组件

import React from 'react';
import BaseBundle from '../../../routes/route-base-bundle';
//import LazyPageCom from '../index';

const LazyPageCom = (props) => (
    <BaseBundle load={() => import(/*webpackChunkName:"chunk-404"*/'../index')}>
        {(CompIndex) => <CompIndex {...props} />}
    </BaseBundle>
);


export default [{
    component: LazyPageCom
}]