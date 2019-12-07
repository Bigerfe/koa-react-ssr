//web 服务启动入口文件 放在根目录方便以后的部署

const app = require('./dist/src/server/app/index.js').default;

//启动服务
app.listen(9001);


console.log('server is start .9001');