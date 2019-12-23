//生产环境中 静态资源的处理


module.exports = function () {

    let devHost = '//localhost:9002';

    let jsScript = `<script type="text/javascript"  src="/index.js"></script>`;
    let cssLink = ``;

    let prodJsFile = ['main.js', 'libs.js', 'common.js'];
    let prodCssFile = ['main.css'];

    const assets = {
        js: [],
        css: []
    };
    if (!global.isProd()) {
        assets.js.push(`<script type="text/javascript"  src="${devHost}/index.js"></script>`);
    } else {
        //导入 asset-manifest.json
        const map = require('../asset-manifest.json');
        prodJsFile.forEach(item => {
            if(map[item])
                assets.js.push(`<script type="text/javascript"  src="${map[item]}"></script>`)
        });
        prodCssFile.forEach(item => {
            if(map[item])
                assets.css.push(`<link rel="stylesheet" type="text/css" href="${map[item]}">
`)
        });
    }


    return assets;

}