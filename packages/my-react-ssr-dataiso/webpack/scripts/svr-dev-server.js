//开发环境 node 服务启动入口

const proConfig = require('../../src/share/pro-config');

//node server port
const nodeServerPort = proConfig.nodeServerPort;


//启动前检查端口是否占用，杀掉占用端口的进程
require('./free-port')(nodeServerPort);

require('../../dist/server/app');
