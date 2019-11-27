/******
 * 相关的请求接口配置 可自行修改
 *  
 */

//fetch 接口 开发环境和生产环境
const DevApiHost ='http://admin.pynsk.com';
const ProductionApiHost ='http://admin.pynsk.com';

const getEnvIsDev = () => (process.env.NODE_ENV !== 'production');


export default {
    //判断是否是开发环境，否则可以理解为生产环境    ，最好统一使用此方法。保证正确
    getIsDev(){
        return getEnvIsDev();
    },
    StaticFolderName:'zz-static',//打包后的静态资源目录 ./dist/static/zz-static
    openProductionStaticFolder: true,//线上环境是否开启静态目录访问能力
    isSSR: true,//项目是否开启 ssr 
    isComponentLazyLoad:true,//组件是否按需加载（现在没有用到，内部已经后处理）
    nodeServerPort:8006,//服务器和本地 node 服务器启动端口，可自行设置
    //业务开发中 fecth api 的地址 ，可以根据环境进行区分
    reqApiUrlHost: getEnvIsDev()?DevApiHost:ProductionApiHost,
    devWdsPort:8007,//wds 服务启动的端口,用于开发环境的静态资源的访问和热更新操作
    routeIndexFolderName: 'index',  //标识业务页面的首页目录名称，路由集中处理后会将此入口排在入口 list 的第一个位置
    //TODO:打包到生产环境的时候这个地址会随机的进行分配 可能导致分配不均
    staticAssetsCdnHost: [
        '//c1.static.xin.com/',
        '//c2.static.xin.com/',
        '//c3.static.xin.com/'
    ],
    Production_JS_Host:'//c1.static.xin.com',//生产环境 js  资源 host
    Production_CSS_Host:'//x2.static.xin.com',//生产环境 css 资源 host
}