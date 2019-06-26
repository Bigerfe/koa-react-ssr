
/**
 * 设置浏览器cookie
 * @param {[type]} req [description]
 * @param {[type]} res [description]
 */
module.exports = function (ctx,next) {
    var cookie = ctx.cookies.get('clientid');
    //console.log('cookie',cookie);
    if (!cookie) {	//写cid	
        ctx.cookies.set('clientid', '1212121212121212', { maxAge: 31536000000});
    }
    //console.log(ctx.request.header);
    return next();
}