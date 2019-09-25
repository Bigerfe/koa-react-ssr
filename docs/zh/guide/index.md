# zz介绍

zz 是一个基于 koa2 react16  webpack4 babel7 react-router5 的 ssr 服务端渲染开发骨架。

可以方便的帮我们快速的构建起一个基础开发服务，帮助我们迅速进入 'react ssr'的开发。

##  初衷

起初只是想研究下 `react ssr` 的实现原理，但是学习的过程中发现网上很多文章介绍的良莠不齐，大都是十分简略的实现方式，包括React官方也缺少完整的SSR(Server-Side Rendering)文档，只是简单的介绍了一下需要用到的API，也无法适用于具体项目的开发。

所有就萌生了打造一个开源项目，可以帮助一些小伙伴儿快速的搞定 `react srr` 基础骨架的搭建，做到开箱即用。另外一个目的也算是提供一个基于  `koa2 的 react ssr` 的完整实现，可以让对 `ssr` 服务端渲染感兴趣的同学方便学习和研究，如果还能一起来完善这个项目那就更好了。


最后，这个项目我会持续的进行维护和更新，当然一个人的力量是有限的，希望更多的人可以一起来帮助 `zz` 成长和完善，欢迎提交 pull request 作出贡献！



## 技术栈

[koa2](https://koa.bootcss.com/) Koa 是一个新的 web 框架，由 Express 幕后的原班人马打造，
致力于成为 web 应用和 API 开发领域中的一个更小、更富有表现力、更健壮的基石。

[React](https://react.docschina.org/)目前最流行的前端框架之一

[React Router5](https://github.com/ReactTraining/react-router)

[ReactDOMServerReact](https://reactjs.org/docs/react-dom-server.html)官方提供的服务端渲染有关的库

[Webpack](https://www.webpackjs.com/)  基于 webpack4进行工程化处理

[Babel7](https://www.babeljs.cn/)




## 运行环境

* 服务器 Node.js >= 8.10， 为了原生的使用async/await语法

* 浏览器版本大于等于IE9, React支持到IE9，但为了更好的在IE下使用，你可能需要引入Polyfill

## 功能特性

以下是目前已具备功能点

* 支持本地开发HMR
* 支持tree shaking以及打包去重依赖
* 支持csr/ssr自定义layout
* 同时支持SSR以及CSR两种开发模式,本地开发环境以及线上环境皆可无缝切换两种渲染模式
* 路由分治管理，不再需要维护一个路由表，省去维护的烦恼
* 支持某个具体的页面是 `SSR 模式`还是 `CSR 模式`
* 伪 PWA 支持，开启此特性后页面的二次访问不再请求接口,同时解决页面回退后原页面定位不准的问题
* 路由双模式支持，可方便的配置当前路由是否按需加载
* Webpack生产环境构建，也可以修改现有配置



