#  部署

项目部署咱们就按照常规的方法进行部署 ，使用 pm2 来做进程守护，当然这里只是一个简单的栗子，仅供参考。

执行生产环境构建 

```javascript
$ npm run build
```

使用 pm2 启动 app.js

```javascript
$ pm2 start app.js -n zz-ssr
```
