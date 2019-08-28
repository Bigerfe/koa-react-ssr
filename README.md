# krs (koa2 + react16 + ssr) 应用开发骨架

`node8.5+` `babel7` `react-router5` `webpack4`

## 最清凉（轻量）的 react ssr 应用开发骨架 

* 上手快速: 都是你熟悉的事物，基于 koa2 react16 ssr 搭建
* 双模式无缝切换: 支持SSR/CSR两种渲染模式，只需更改配置属性即可，也可以对组件设置按需渲染模式
* 路由分治管理: 你写你的路由，我写我的路由，krs 自动合并，不再需要维护整个路由表
* 路由动静结合: 支持组件的按需加载设置，A 路由动态吧，B 路由静态
* 伪 pwa 支持: 访问过的路由中的 state 可按需设置本地缓存,页面二次访问可无接口请求
* 开放: 代码完全开放，纯白盒，完全可以作为个人的 `ssr` 学习参考资源

## 快速上手

如何快速的让 `krs` 骨架在你的机器跑起来.

这里我们提供了一个脚手架，方便你创建快速项目。

```javascript

//创建想项目
$ npm install mmkrs-cli -g
$ mmkrs -i ---> select project ---> <Your Project Name>
$ cd <Your Project Name>
$ npm i
$ npm run dev
$ open http://<Your local ip>:8808

//快速创建页面
$ cd <Your Project Name>
$ mmkrs -i -----> select page ----> <Your  pageName>
$ open http://<Your local ip>:8808/<Your  pageName>

//结束
```


### 社区交流

### 作者

[http://bigerfe.com](http://bigerfe.com)

笔  名: 张大胖 

公众号: 前端张大胖

