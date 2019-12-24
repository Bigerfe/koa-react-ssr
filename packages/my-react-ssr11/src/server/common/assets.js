//生产环境中 静态资源的处理


module.exports = function () {

    let devHost = '//localhost:9002';

    let jsScript = `<script type="text/javascript"  src="/index.js"></script>`;
    let cssLink = ``;

    //生产环境资源
    let prodJsFile = ['main.js', 'libs.js', 'common.js'];
    let prodCssFile = ['main.css'];

    //开发环境资源
    let devJsFile = ['libs.js', 'main.js'];
    let devCssFile = [''];

    const assets = {
        js: [],
        css: []
    };
    if (!global.isProd()) {
        devJsFile.forEach(item => {
                assets.js.push(`<script type="text/javascript"  src="${devHost}/${item}"></script>`);
        });
        devCssFile.forEach(item => {
                assets.css.push(`<link rel="stylesheet" type="text/css" href="${devHost}/${item}" />`);
        });
    } else {
        //导入 asset-manifest.json 此文件最终会被打包进app.js 所有路径上要特殊处理,否则打包失败，找不到文件
        
        const map =require('../../../dist/server/asset-manifest.json');
        prodJsFile.forEach(item => {
            if (map[item])
                assets.js.push(`<script type="text/javascript"  src="${map[item]}"></script>`);
        });
        prodCssFile.forEach(item => {
            if (map[item])
                assets.css.push(`<link rel="stylesheet" type="text/css" href="${map[item]}">`);
        });
    }


    return assets;

}