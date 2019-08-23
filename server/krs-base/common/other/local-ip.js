
/**
 * 获得 本机 ip 地址
 */
const interfaces = require('os').networkInterfaces(); // 在开发环境中获取局域网中的本机iP地址

module.exports = ()=>{
    let IPAddress = '';
    if (interfaces['en0']) {
        //mac
        let en = interfaces['en0'];
        if (en[1] && en[1].address) {
            IPAddress = en[1].address;
        }
    } else {
        //window
        for (var devName in interfaces) {
            var iface = interfaces[devName];
            for (var i = 0; i < iface.length; i++) {
                var alias = iface[i];
                if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                    IPAddress = alias.address;
                    break;
                }
            }
        }
    }
    process.env.LocalIP = IPAddress;
    return IPAddress;
}