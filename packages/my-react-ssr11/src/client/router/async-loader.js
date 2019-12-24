//异步加载组件的高阶函数

import AsyncBundle from './async-bundle';
import proConfig from '../../share/pro-config';
import React from 'react';
function AsyncLoader (loader) {

    function asyncFn() {
       return <AsyncBundle load={loader}>
            {(Comp) => <Comp />}
        </AsyncBundle>
    }

    //标记为异步组件
    asyncFn[proConfig.asyncComponentKey] = true;

    return asyncFn;
}

export default AsyncLoader;