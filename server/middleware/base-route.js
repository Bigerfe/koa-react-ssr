const ejs = require('../common/ejs');

module.exports = async function (ctx, next) {
    let path = ctx.path,
        query = ctx.query;
    let body = {};

    const html = await ejs.renderFile('dist/index.html');
    ctx.body = html;

    await next();
}