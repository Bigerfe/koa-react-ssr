/**
 * api请求约定 处理
 */
import apis from '../api-common/index';
import utils from './utils';

export default async function(ctx){
    let path =ctx.path;
    let url = ctx.url;
    const body = ctx.body;

    console.log('path', path);
    console.log('url', url);

    const urlMatch = path.match(/_api\/(\w+.*-\w+)+\/(\w+.*-\w+)+\/?/);//获得 controller 和 action  name
    if(!urlMatch) return null;

    //把 abc-e --> -ez转换为abcE
    const jsFile = utils.nameToCamelFormat(urlMatch[1]); 
    const jsAction = utils.nameToCamelFormat( urlMatch[2]);
    console.log(urlMatch);
    console.log('jsaction',jsAction);

    const res =await apis[jsFile][jsAction]();

    ctx.body = res;
}