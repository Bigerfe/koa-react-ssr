//开发环境 node 服务启动入口

const localIp = process.argv[process.argv.length - 1];//获得 本机ip 地址

global.__LOCAL__IP__=localIp;

const proConfig = require('../../src/share/pro-config');

//node server port
const nodeServerPort = proConfig.nodeServerPort;


//启动前检查端口是否占用，杀掉占用端口的进程
require('./free-port')(nodeServerPort);

require('../../dist/server/app');
