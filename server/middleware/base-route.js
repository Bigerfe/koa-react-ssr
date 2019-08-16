import ejs from '../common/ejs';
import reqTransform from '../common/req-transform';
import renderReact from '../common/render-react';
import matchCompoent from '../common/match-component';
import config from '../config';

export default async function (ctx, next) {
    let path = ctx.path,
        query = ctx.query,
        url = ctx.url,
        body = {};

    console.log('path', path);
    console.log('url', url);

//process.env.IS_DEV
    if(config.isSSR && path.indexOf('.')===-1){
        await renderReact(ctx);
    }else{
        const html = await ejs.renderFile('dist/static/csr.html');
    }

    reqTransform(ctx);

    await next();
}