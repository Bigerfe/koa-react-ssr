import ejs from '../common/ejs';
import reqTransform from '../common/req-transform';
import renderReact from '../common/render-react';
import matchCompoent from '../common/match-component';

export default async function (ctx, next) {
    let path = ctx.path,
        query = ctx.query,
        url = ctx.url,
        body = {};

    console.log('path', path);
    console.log('url', url);

    if (path === '/detail') {

        await renderReact(ctx);
    } else {

        if (process.env.IS_DEV) {
            ctx.body = 'welcome here haha....11';
        } else {
            const html = await ejs.renderFile('dist/static/index.html');
        }
    }


    reqTransform(ctx);

    await next();
}