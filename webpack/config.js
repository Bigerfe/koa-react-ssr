const path = require('path');

module.exports = {
    jsCdnHost: '/',
    cssCdnHost: 'http://c1',
    appPort: '8809', //默认服务端口号
    isDev: process.env.NODE_ENV !== 'production',
    appSrc:path.resolve(__dirname,'../../src'),
    appServerSrc: path.resolve(__dirname, '../server'),
}