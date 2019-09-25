---
home: true
sidebar: auto
//heroImage: chrome-extension://mmgplondnjekobonklacmemikcnhklla/logo.png
actionText: 快速上手 →
actionLink: /zh/guide/fast
features:
- title: 极速开发
  details: 这些都是你用的最多的的技术，以 koa2,react16,router5,babel7,webpack4搭建而成，上手容易，可快速进入开发
- title: 双模式支持
  details: 支持HMR，同时支持本地开发以及生产环境CSR/SSR两种渲染模式无缝切换，支持定制特定组件的渲染模式
- title: 工程化集成
  details: 内部已完成基于 webpack 的工程化基础，可以直接用来进行线上环境构建和部署
footer: MIT Licensed | Copyright © 2019-present Bigerfe 版权所有
prev: ./some-other-page
next: false
sidebarDepth: 2
---

## 快速启动 `zz.js`
### 创建项目
```javascript
$ npm i zzjs-cli -g
//初始化项目
$ zzjs -i 
$ cd <Your Project Name>
$ npm i
$ npm run dev //本地开发的watch 模式
$ open http://<Your local ip>:8808
```
### 创建页面

``` javascript
$ cd <Your Project Name>
//创建page
$ zzjs -p 
$ <Your  pageName>
$ open http://<Your local ip>:8808/<Your  pageName>
```