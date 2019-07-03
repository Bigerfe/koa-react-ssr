import  ejs from '../common/ejs';

export default async function (ctx, next) {
    let path = ctx.path,
        query = ctx.query;
    let body = {};

    const html = await ejs.renderFile('dist/static/index.html');
    ctx.body = html;
    console.log(process.env.NODE_ENV);
    await next();
}