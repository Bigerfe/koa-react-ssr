// src/server/common/assets.js

const proConfig = require('../../share/pro-config');

//生产环境中 静态资源的处理
module.exports = function () {

    //let devHost = '//localhost:9001';
    let devHost = `//${global.__LOCAL__IP__}:${proConfig.wdsPort}`;

    let jsFiles = ['libs.js', 'main.js','styles.js'];
    let cssFiles = ['styles.css'];

    const assets = {
        js: [],
        css: []
    };
    if (!__IS_PROD__) {//开发环境
        assets.js.push(`<script type="text/javascript"  src="${devHost}/libs.js"></script>`);
        assets.js.push(`<script type="text/javascript"  src="${devHost}/main.js"></script>`);
        assets.js.push(`<script type="text/javascript"  src="${devHost}/styles.js"></script>`);

        assets.css.push(`<link rel="stylesheet" type="text/css" href="${devHost}/styles.css" />`);
    } else {
        //生产环境 从 asset-manifest.json 读取资源
        const map = require('@dist/server/asset-manifest.json');
        jsFiles.forEach(item => {
            if(map[item])
                assets.js.push(`<script type="text/javascript"  src="${map[item]}"></script>`)
        });
        cssFiles.forEach(item => {
            if(map[item])
                assets.css.push(`<link rel="stylesheet" type="text/css" href="${map[item]}" />`)
        });
    }


    return assets;

}