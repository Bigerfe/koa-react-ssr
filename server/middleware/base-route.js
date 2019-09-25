import ejs from 'ejs';
//引入 react ssr 中间件处理
import renderReact from '../zz-base/common/ssr/';
import config from '../zz-base/config';
import fs from 'fs';
import path from 'path';

export default async function (ctx, next) {
    let query = ctx.query,
        body = {};

    console.log('path', ctx.path);
    console.log('url', ctx.url);

    //TODO:这里还需要完善  为了防止类似图片的请求进入到 ssr 处理
    if (ctx.path.indexOf('.')===-1){
        await renderReact(ctx);
    }else{
        //如果没有开启 ssr 则输出 csr 页面  此逻辑
        // const readStream = fs.createReadStream(path.resolve(__dirname,'../zz-base/temp/csr.html'));
        // readStream.pipe(ctx.res);
        return null;
    }

    await next();
}