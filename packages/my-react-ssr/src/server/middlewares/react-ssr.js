// /src/server/middlewares/react-ssr.js

//完成 react ssr 工作的中间件
//引入Index 组件
import React from 'react';
import Index from '../../client/pages/index';
import { renderToString} from 'react-dom/server';

export default  (ctx,next)=>{

    const html = renderToString(<Index/>);
    ctx.body=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>my react ssr</title>
</head>
<body>
    <div id="root">
       ${html} <span>测试内容</span>
    </div>
</body>
</html>
</body>
<script type="text/javascript"  src="index.js"></script>
`;

    return next();
}