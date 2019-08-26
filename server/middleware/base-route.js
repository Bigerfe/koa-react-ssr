import ejs from 'ejs';
import reqTransform from '../common/req-transform';
//引入 react ssr 中间件处理
import renderReact from '../krs-base/common/ssr/';
import config from '../krs-base/config';
export default async function (ctx, next) {
    let path = ctx.path,
        query = ctx.query,
        url = ctx.url,
        body = {};

    console.log('path', path);
    console.log('url', url);

    if(path.indexOf('.')===-1){
        await renderReact(ctx);
    }else{
        const html ='';
    }

    reqTransform(ctx);

    await next();
}