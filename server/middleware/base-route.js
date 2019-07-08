import  ejs from '../common/ejs';
import reqTransform from '../common/req-transform';

export default async function (ctx, next) {
    let path = ctx.path,
        query = ctx.query;
    let body = {};


    if (process.env.IS_DEV){
        ctx.body = 'welcome here haha....11';
    }else{
        const html = await ejs.renderFile('dist/static/index.html');
    }

    reqTransform(ctx);

    await next();
}