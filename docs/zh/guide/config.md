# 基础配置

`zz` 默认有自己的一套配置，比如本地开发端口、静态资源的 cdn 地址等

当然这些配置你也可以进行修改

全局配置文件 `/src/config/project-config.js`


```javascript

//fetch 接口 开发环境和生产环境
const DevApiHost ='http://dev.aaa.com';  //开发环境接口地址
const ProductionApiHost ='http://pro.aaa.com';//生产环境接口地址

export default {
    //判断是否是开发环境，否则可以理解为生产环境，最好统一使用此方法。保证正确
    getIsDev(){
        return process.env.NODE_ENV ==='production'
    },
    openProductionStaticFolder: true,//线上环境是否开启静态目录访问能力
    isSSR: true,//是否开启 ssr 
    nodeServerPort:8808,//服务器和本地 node 服务器启动端口，可自行设置
    //业务开发中 fecth api 的地址 ，可以根据环境进行区分
    reqApiUrlHost:process.env.IS_DEV?DevApiHost:ProductionApiHost,
    devWdsPort:8809,//wds 服务启动的端口,用于开发环境的静态资源的访问和热更新操作
    routeIndexFolderName: 'index',  //标识业务页面的首页目录名称，路由集中处理后会将此入口排在入口 list 的第一个位置
    //TODO:打包到生产环境的时候这个地址会随机的进行分配 可能导致分配不均
    staticAssetsCdnHost: [
        '//c1.static.aa.com/',
        '//c2.static.aa.com/',
        '//c3.static.aa.com/'
    ],
    Production_JS_Host:'//c1.static.aa.com',//生产环境 js  资源 host
    Production_CSS_Host:'//x2.static.aa.com',//生产环境 css 资源 host
}
```
