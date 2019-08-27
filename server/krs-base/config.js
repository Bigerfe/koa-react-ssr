"use strict";
/**
 * 系统配置
 */

const projectConfig = require('../../src/config/project-config').default; //本地模拟生产环境
const ISimulateProduction = process.env.SimulateProduction;
const LocalNodeServerPort = projectConfig.nodeServerPort;
const DevClientServerPort = projectConfig.devWdsPort;
const StaticFolderName = 'krs-static'; // TODO:// 配置需要进行提取 生产环境的js 资源和 css 资源的 host  ，这个可以进行配置

let Production_JS_Host = projectConfig.Production_JS_Host;
let Production_CSS_Host = projectConfig.Production_CSS_Host;
let assetsJson = {};

if (!isDev() || ISimulateProduction) {
    assetsJson = require('../asset-manifest.json');
}

if (isDev()) {
    require('./common/other/local-ip')();

    Production_JS_Host = `//${process.env.LocalIP}:${DevClientServerPort}`;
    Production_CSS_Host = `//${process.env.LocalIP}:${DevClientServerPort}`;

    if (ISimulateProduction) {
        Production_JS_Host = `//${process.env.LocalIP}:${LocalNodeServerPort}`;
        Production_CSS_Host = `//${process.env.LocalIP}:${LocalNodeServerPort}`;
    }
}


function isDev() {
    return process.env.NODE_ENV !== 'production';
}

const config = {
    openProductionStaticFolder: projectConfig.openProductionStaticFolder,
    //线上环境是否开启静态目录访问能力
    isimulateProduction: ISimulateProduction,
    //本地模拟生成环境运行
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
    isSSR: projectConfig.isSSR,
    //是否使用 ssr 模式
    isComponentLazyLoad: projectConfig.isComponentLazyLoad,
    //组件是否按需加载 //次数行暂时没有用到 ，内部对组件已经做了判断
    staticSource: {
        js: [`${Production_JS_Host}/${StaticFolderName}/js/styles.js`, `${Production_JS_Host}/${StaticFolderName}/js/libs.js`, `${Production_JS_Host}/${StaticFolderName}/js/entry.js`],
        css: [`${Production_CSS_Host}/${StaticFolderName}/css/styles.css`]
    }
};


if ((isDev() && ISimulateProduction) || !isDev()) {
    config.staticSource = {
        js: [`${Production_JS_Host}${assetsJson['styles.js']}`, `${Production_JS_Host}${assetsJson['libs.js']}`, `${Production_JS_Host}${assetsJson['entry.js']}`],
        css: [`${Production_CSS_Host}${assetsJson['styles.css']}`]
    };
}

module.exports = config;