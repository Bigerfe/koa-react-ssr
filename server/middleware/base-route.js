import  ejs from '../common/ejs';
import mlink from '../db-common/mlink';

export default async function (ctx, next) {
    let path = ctx.path,
        query = ctx.query;
    let body = {};


    if (process.env.IS_DEV){
        ctx.body = 'welcome here haha....11';
    }else{
        const html = await ejs.renderFile('dist/static/index.html');
    }

    const data = await mlink.getAll();
    console.log(data);
    await next();
}