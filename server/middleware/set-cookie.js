/**
 * 设置浏览器cookie 无引用
 * @param {[type]} req [description]
 * @param {[type]} res [description]
 */
export default (ctx, next) => {
    var cookie = ctx.cookies.get('clientid');
    if (!cookie) { //写cid	
        ctx.cookies.set('clientid', 'krs-id', {
            maxAge: 31536000000
        });
    }
    return next();
}