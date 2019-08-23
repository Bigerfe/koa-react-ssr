/******
 * 相关的请求接口配置 可自行修改
 *  
 */

//fetch 接口 开发环境和生产环境
const DevApiHost ='http://admin.pynsk.com';
const ProductionApiHost='http://localhost';

export default {
    reqApiUrlHost:process.env.IS_DEV?DevApiHost:ProductionApiHost
}