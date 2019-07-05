/**
 * 系统配置
 */


module.exports = {
    appPort: '8808', //默认服务端口号
    isDev:process.env.NODE_ENV!=='production',
    db:{
        host: '10.70.74.186',
        user: 'root',
        password: '123',
        database: 'circle-parts-db'
    }
}