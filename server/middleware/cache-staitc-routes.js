/**
 * 缓存静态路由
 */

import {
    addCacheStaticRoutes
} from '../common/ssr/static-routes';

export default async (ctx, next) => {

    if (ctx.path.indexOf('.') === -1)
        await addCacheStaticRoutes();

    await next();
}