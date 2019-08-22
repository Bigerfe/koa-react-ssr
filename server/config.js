"use strict";

/**
 * 系统配置
 */

const assetsJson = require('./asset-manifest.json'); //TODO:这里要在发布到生产环境时，改成 false

//本地模拟生成环境运行,上线时候请关闭-false
const LocalLikeProduction = true;
const LocalNodeServerPort = 8808;
let Production_JS_Host = '//c1.static.xin.com';
let Production_CSS_Host = '//x2.static.xin.com';

if (LocalLikeProduction) {
    require('./common/other/local-ip')();

    Production_JS_Host = `//${process.env.LocalIP}:${LocalNodeServerPort}`;
    Production_CSS_Host = `//${process.env.LocalIP}:${LocalNodeServerPort}`;
}

module.exports = {
    isOpenLocalLikeProduction: LocalLikeProduction,//本地模拟生成环境运行
    nodeServerPort: LocalNodeServerPort,
    //默认node 服务端口号,生产环境可以反向代理这个端口
    isDev: process.env.NODE_ENV !== 'production',
    db: {
        //mysql 链接配置
        host: 'localhost',
        user: 'root',
        password: '123',
        database: 'circle-parts-db'
    },
    isSSR: true,
    //是否使用 ssr 模式
    isComponentLazyLoad: true,
    //组件是否按需加载 //次数行暂时没有用到 ，内部对组件已经做了判断
    staticSource: {
        js: [`${Production_JS_Host}/${assetsJson['styles.js']}`, `${Production_JS_Host}/${assetsJson['libs.js']}`, `${Production_JS_Host}/${assetsJson['entry.js']}`],
        css: [`${Production_CSS_Host}/${assetsJson['styles.css']}`]
    }
};