//页面的路由配置，可配置动态加载信息，必须返回Bundle 组件

import React from 'react';
import BaseBundle from '../../../routes/route-base-bundle';

const LazyPageCom = (props) => (
    <BaseBundle load={() => import(/*webpackChunkName:"chunk-news-detail"*/'../index')}>
        {(CompIndex) => <CompIndex {...props} />}
    </BaseBundle>
);


export default [{
    path: '/news/:id',
    component: LazyPageCom
}
]


