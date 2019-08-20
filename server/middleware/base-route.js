import ejs from '../common/ejs';
import reqTransform from '../common/req-transform';
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

    CacheHelper.add('a',{
        a:100,b:200
    });



    if(path.indexOf('.')===-1){
        await renderReact(ctx);
    }else{
        const html = await ejs.renderFile('dist/static/csr.html');
    }

    reqTransform(ctx);

    await next();
}