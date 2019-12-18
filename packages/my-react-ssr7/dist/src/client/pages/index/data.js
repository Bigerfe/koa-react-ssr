"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const data = [{
  "title": "深入浅出TypeScript：从基础知识到类型编程",
  "desc": "Vue3 源码及开发必备基础，从基础知识到类型工具设计，从理论到实战，手把手让你从零基础成为进阶使用者。",
  "img": "https://user-gold-cdn.xitu.io/2019/11/8/16e4ab5d6aff406a?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1"
}, {
  "title": "SVG 动画开发实战手册",
  "desc": "从0到1，学习SVG动画开发知识，快速高效完成SVG动画效果开发。",
  "img": "https://user-gold-cdn.xitu.io/2019/9/26/16d6bda264ac27e4?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1"
}, {
  "title": "预售JavaScript 设计模式核⼼原理与应⽤实践",
  "desc": "通俗易懂的编程“套路“学。带你深入看似高深实则接地气的设计模式原理，在实际场景中内化设计模式的”道“与”术“。学会驾驭代码，而非被其奴役。",
  "img": "https://user-gold-cdn.xitu.io/2019/9/16/16d382e623923d91?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1"
}, {
  "title": "从入门到深入：IM聊天系统前端开发实践",
  "desc": "IM聊天为案例，系统性讲解前端核心知识点",
  "img": "https://user-gold-cdn.xitu.io/2019/5/27/16af958d3adcf362?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1"
}, {
  "title": "你不知道的 Chrome 调试技巧",
  "desc": "熟练掌握 Chrome 调试技巧，直接提升工作效率。",
  "img": "https://user-gold-cdn.xitu.io/2019/1/31/168a1fa41cd01af2?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1"
}, {
  "title": "WebGL 入门与实践",
  "desc": "介绍 WebGL 与 CSS 3D 开发的点点滴滴，详细阐述 3D 数学库的实现原理与使用，演示 3D 数学库对于 WebGL 开发和普通网页开发的重要作用，助力每个前端开发者轻松掌握 3D 开发的关键技术。",
  "img": "https://user-gold-cdn.xitu.io/2019/2/25/16922d6d22ff1458?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1"
}, {
  "title": "基于 ThreeJS 框架的魔方微信小游戏实践",
  "desc": "从 0 到 1，一步步带你基于 ThreeJS 实现一个炫酷的魔方微信小游戏",
  "img": "https://user-gold-cdn.xitu.io/2019/2/25/16922a9c5a3527fa?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1"
}, {
  "title": "前端面试之道",
  "desc": "助你建立起完整的前端知识架构体系，探究知识的原理，深入了解大厂常考知识点",
  "img": "https://user-gold-cdn.xitu.io/2018/12/25/167e14942f2dcf44?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1"
}, {
  "title": "Vue.js 组件精讲",
  "desc": "iView 作者 3 年的 Vue.js 组件开源积累，Vue.js 组件知识深入剖析",
  "img": "https://user-gold-cdn.xitu.io/2018/12/18/167c119a41e444d5?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1"
}, {
  "title": "React 实战：设计模式和最佳实践",
  "desc": "深入了解 React 应用中的设计模式，总结业界验证的最佳实践，更进一步，了解React 未来新功能 Suspense 和 Hooks。",
  "img": "https://user-gold-cdn.xitu.io/2018/12/4/16779ed4b21a9fa5?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1"
}, {
  "title": "Vue 项目构建与开发入门",
  "desc": "从构建到开发，帮助 Vue 开发者提升项目构建与开发能力，基于 Vue CLI 3",
  "img": "https://user-gold-cdn.xitu.io/2018/11/27/16754380a4c1a096?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1"
}, {
  "title": "Taro 多端开发实现原理与项目实战",
  "desc": "剖析 Taro 多端开发框架的实现原理，并通过电商核心的项目实战，帮助开发者快速上手多端项目。",
  "img": "https://user-gold-cdn.xitu.io/2018/11/12/16706202cc6428df?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1"
}, {
  "title": "前端性能优化原理与实践",
  "desc": "毫秒必争！深入理解前端性能原理，将晦涩的知识转化为可爱的生产力，建立你自己的优化技能索引目录",
  "img": "https://user-gold-cdn.xitu.io/2018/10/23/166a0387b91066b9?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1"
}, {
  "title": "微信小游戏开发入门：从 0 到 1 实现井字棋游戏",
  "desc": "构建自己的第一个微信小游戏，让你的社交和游戏创意变为现实",
  "img": "https://user-gold-cdn.xitu.io/2018/9/18/165eb6f3cb9eb04f?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1"
}, {
  "title": "基于 hapi 的 Node.js 小程序后端开发实践指南",
  "desc": "基于 Node.js 搭建敏捷高效的 RESTful 接口服务，走上小程序开发的全栈之路",
  "img": "https://user-gold-cdn.xitu.io/2018/9/11/165c7a188e490e48?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1"
}, {
  "title": "微信小程序开发入门：从 0 到 1 实现天气小程序",
  "desc": "从基础到实战，从开发环境搭建到开发、调试、上线，打通小程序开发全流程",
  "img": "https://user-gold-cdn.xitu.io/2018/8/29/16584f1faa1c4262?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1"
}, {
  "title": "React 组合式开发实践：打造企业管理系统五大核心模块",
  "desc": "基于 React 的企业管理系统开发经验，带你学习如何抽象复杂业务逻辑，帮助团队实现效能提升",
  "img": "https://user-gold-cdn.xitu.io/2018/9/5/165a8a3d93f6ca7d?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1"
}, {
  "title": "区块链开发入门：从 0 到 1 构建基于以太坊智能合约的 ICO DApp",
  "desc": "写给前端开发者的第一本区块链开发入门指南，通过 DApp 开发实战（基于以太坊创始人 V 神的 DAICO 设计思想），深入掌握区块链及以太坊技术",
  "img": "https://user-gold-cdn.xitu.io/2018/5/17/1636d772f3d23cf1?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1"
}, {
  "title": "基于 JavaScript 开发灵活的数据应用",
  "desc": "使用 JavaScript、ECharts、Vue.js 等开发工具，完成各种数据结构的处理、转换、动态过滤以及数据可视化的开发。",
  "img": "https://user-gold-cdn.xitu.io/2018/4/9/162a9c24e48d274b?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1"
}, {
  "title": "Web 前端面试指南与高频考题解析",
  "desc": "找工作面试是门技术活，掌握一定技巧可以让你事半功倍",
  "img": "https://user-gold-cdn.xitu.io/2018/3/5/161f664af48f2400?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1"
}, {
  "title": "大厂 H5 开发实战手册",
  "desc": "京东、腾讯等大厂 H5 开发或 UI 开发工程师的真实实战技巧",
  "img": "https://user-gold-cdn.xitu.io/2018/5/9/16342f9666cf9b8f?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1"
}, {
  "title": "使用 webpack 定制前端开发环境",
  "desc": "基于 4.x 版本，从细节和深度上弄懂 webpack，随心所欲定制前端开发环境",
  "img": "https://user-gold-cdn.xitu.io/2018/3/2/161e5a0aebdab5ed?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1"
}, {
  "title": "剖析 Vue.js 内部运行机制",
  "desc": "把原理抽象为小 Demo，以一种对新手友好的方式带领读者漫游 Vue.js 的世界",
  "img": "https://user-gold-cdn.xitu.io/2018/1/16/160fdc404b36a1a0?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1"
}, {
  "title": "Git 原理详解及实用指南",
  "desc": "让你不仅用上、更用明白的 Git 实用指南",
  "img": "https://user-gold-cdn.xitu.io/2017/11/27/15ffbb05174a57f8?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1"
}, {
  "title": "用 npm script 打造超溜的前端工作流",
  "desc": "抛弃笨重的构建工具，拥抱轻巧而不失强大的 npm script，随小册赠送视频版教程。",
  "img": "https://user-gold-cdn.xitu.io/2017/11/20/15fd699517c3c6a4?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1"
}, {
  "title": "如何使用 Canvas 制作出炫酷的网页背景特效",
  "desc": "从零开始学习 Canvas 相关知识，分析其特效，最终制作出炫酷的网页背景",
  "img": "https://user-gold-cdn.xitu.io/2017/11/20/15fd79563b28dd6e?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1"
}];
var _default = data;
exports.default = _default;
