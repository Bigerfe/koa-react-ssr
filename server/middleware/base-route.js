import ejs from 'ejs';
import reqTransform from '../common/other/req-transform';
import renderReact from '../common/ssr/';
import config from '../config';
import CacheHelper from '../common/other/cache-helper';
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
        const html = await ejs.renderFile('dist/static/csr.html');
    }

    reqTransform(ctx);

    await next();
}