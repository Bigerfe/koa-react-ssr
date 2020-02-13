# zz.js v2.0 (koa2 + react16 + ssr) 服务端渲染应用开发骨架

`node10+` `babel7` `react-router5` `webpack4`

## 最清凉（轻量）的 react ssr 应用开发骨架 

* 上手快速: 都是你熟悉的事物，基于 koa2 react16 ssr 搭建
* 双模式无缝切换: 支持SSR/CSR两种渲染模式，只需更改配置属性即可，也可以对组件设置按需渲染模式
* 路由分治管理: 你写你的路由，我写我的路由，zz 自动合并，不再需要维护整个路由表
* 路由动静结合: 支持组件的按需加载设置，A 路由动态吧，B 路由静态
* 开放: 代码完全开放，纯白盒，完全可以作为个人的 `ssr` 学习参考资源

# 快速上手

 从这里开始你将了解到怎样让 `zz`  在本地快速的跑起来，然后进行实际项目开发。

## 环境准备

首先你需要安装 [node](https://nodejs.org/en/) ,并且确保 node 版本是10.0或以上。mac 下推荐使用 [nvm](https://github.com/creationix/nvm) 来管理 node 版本）

```javascript
$ node -v
10.0x
```

## 脚手架安装

为了方便我们创建应用和页面，这里提供了一个配套的 `zz-cli` 脚手架。

先全局安装脚手架。

```javascript

$ npm i zzjs-cli -g

```

## 创建应用

```
//初始化项目
$ zzjs -i
$ <Your Project Name>
$ cd <Your Project Name>
$ npm i
$ npm run dev //本地开发的watch 模式
$ open http://<Your local ip>:9001
```

## 启动脚本

可通过不同的命令开启不同的渲染模式。

```javascript
$ npm run dev //开启本地开发 可修改配置内的属性 __IS_SSR__ 来支持两种渲染模式
$ //更多.....
```

## 目录结构

```
├── dist // 生产环境打包后的资源目录
│ ├── static //打包的静态资源文件
│ ├── server //用于同构的运行于 node 端的文件
| │ ├── app.js //服务启动入口
├── docs //  帮助文档
├── src // 开发时 react 组件相关代码
│ ├── server //服务端代码目录
│ ├── client //页面和组件目录
| │ ├── app //应用入口
│ │ ├── layout //layout 组件
│ │ ├── index.js //webpack entry 打包入口
│ ├── pages // 业务页面
│ │ ├── index //默认首页
│ ├── router // 路由相关
│ ├── share //存放公共代码
├── test // 单页测试
├── webpack //构建配置
```

## 约定

**页面入口**

关于`/src/pages/`下每个页面的入口的约定，目前只支持一级路由的设置，所有的页面的入口都是 `index.js`, `zz`内部会自动进行识别。

**路由约定**

每个页面的路由配置的方式不再是集中式配置，而是分治配置，每个页面对应一个路由配置，请按照下面的格式进行配置

举个栗子

```javascript

// /src/pages/index  页面目录

// /src/pages/index/config/route.js 路由配置

//路由代码,可以方便的设置路由是否按需加载

import React from 'react';
import BaseBundle from '../../../routes/route-base-bundle';
//import LazyPageCom from '../index'; //静态组件模式

//动态组件配置   
const LazyPageCom = (props) => (
    <BaseBundle {..props} load={() => import(/*webpackChunkName:"chunk-index"*/'../index')}>
        {(CompIndex) => <CompIndex {...props} />}
    </BaseBundle>
);

//一个页面组件可配置多个路由入口
export default [
    {
        path:'/',
        component: LazyPageCom,
        exact:true
    },{
        path: '/index',
        component: LazyPageCom
    }
]

```

你只需要修改 webpackChunkName 的名称和 export 导出的数据即可，当然也可以对当前页面配置多个路由.

## 创建页面

可通过脚手架快速的创建页面

```javascript
$ cd <Your Project Name>
//初始化项目
$ zzjs -p
$ <Your  pageName>
$ open http://<Your local ip>:8808/<Your  pageName>
```

## 路由分治管理

为了方便维护和扩展，`zz` 把路由进行了分治管理，每个页面的路由都是独立的，只需要单独的配置即可。

请参考路由约定

## 数据预取同构

数据预取的目的是在 `node` 端渲染组件前提前从接口或者某个数据源获取到数据，也可以让某个页面在 `CSR` 下可以拿到数据，进行组件的 update。

为了方便的实现同构我们在页面组件内约定了一个数据预取的静态方法  `getInitialProps`,当前页面首屏数据都是从这个方法内进行返回。

```javascript
    //基础参数的带入
    //opt={query:{},params:{}}  
    static async getInitialProps(zzOpt){//数据预取
        

        if(__SERVER__){
            //如果是服务端渲染的话  可以做的处理
        }
        //接口 a
       const fetch1= fetch.postForm('/fe_api/a', {
            data: { a: 4000 }
        });

        //接口 b
       const fecth2= fetch.postForm('/fe_api/b', {
            data: { c: 2000 }
        });

        const resArr =await fetch.multipleFetch(fetch1, fecth2);
       
        //返回数据固定格式  page 代表页面信息，支持 seo 的设置
        //fetchData是接口返回的数据 
        return {
            page:{
                tdk: {
                    title: 'ksr 框架',
                    keyword: 'ssr react',
                    description: '我是描述'
                }
            },
            fetchData: resArr
        } 
    }

```

## 页面 SEO

在 数据预取同构 已经看到了 `getInitialProps` 方法返回的数据是一个固定的格式，结果内包含一个 `page`字段.

`page` 字段表示的就是当前页面的 `SEO` 的信息.

```javascript
    //此处代码已略
   return {
            page:{
                tdk: {
                    title: 'ksr 框架',
                    keyword: 'ssr react',
                    description: '我是描述'
                }
            },
            fetchData: resArr
        } 
```

## 页面渲染

一个page 的渲染

* 页面组件需要继承一个 `zz` 的基础组件 `ZzPageBase`,为我们封装了一些基础数据获取和存储功能.

* 需要设置 static contextType = RootContext 为的是让组件可以获得全局的数据.

* 实现 static async getInitialProps 数据预取方法.

* `componentDidMount` 内是否需要做数据的更新，如果需要更新可以调用getInitialProps方法.

参考完整代码

```javascript
import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import RootContext from '../../app/route-context';//自定义 context
import ZzPageBase from '../../zz-base/common/components/zz-page-base';//基础组件 页面组件都需要继承
import fetch from '../../common/fetch';//内置的 fech 模块


export default class Index extends ZzPageBase{

    constructor(props,context){
        super(props,context);
    }

    enableSpaDataCache=true;//开启 伪 pwa 数据缓存 

    //得到 context 对象
    static contextType = RootContext;

    //基础参数的带入
    //opt={query:{},params:{}}  
    static async getInitialProps(zzOpt){//数据预取
        

        if(__SERVER__){
            //如果是服务端渲染的话  可以做的处理
        }

       const fetch1= fetch.postForm('/fe_api/a', {
            data: { a: 4000 }
        });

       const fecth2= fetch.postForm('/fe_api/b', {
            data: { c: 2000 }
        });

        const resArr =await fetch.multipleFetch(fetch1, fecth2);
       
        //返回数据固定格式  page 代表页面信息，支持 seo 的设置
        //fetchData是接口返回的数据 
        return {
            page:{
                tdk: {
                    title: 'ksr 框架',
                    keyword: 'ssr react',
                    description: '我是描述'
                }
            },
            fetchData: resArr
        } 
    }

    componentDidMount(){
       
       //数据更新 参考
       //this.isSSR 标识当前页面是否是 ssr 输出
       //this.hasSpaCacheData标识是否有伪 pwa 的缓存数据

        if (!this.isSSR && !this.hasSpaCacheData){// 页面如果是客户端的需要重新获取数据
            Index.getInitialProps(this.props.zzOpt).then(data=>{
                this.setState({
                    ...data
                },()=>{
                    document.title=this.state.page.tdk.title;
                });
            });
        }
    }

    render(){
     
        const {page,fetchData}=this.state;//获得数据
     
        //参考代码，需要对数据做边界容错处理

        return <div className="detailBox">
          
           <div>
           {
                    page && <div><span>title:{page.tdk.title}</span>
                    <span>ky:{page.tdk.keyword}</span>
                    </div> 
           }
           </div>
           {
              res && res.data.map(item=>{
                   return <div key={item.id}>{item.keyId}:{item.keyName}---{item.setContent}</div>
               })
           }
        </div>
    }
}
```





## 特殊字段

`__SERVER__`  常量、表示当前是否是服务端渲染，经常会在组件内被使用

`this.isSSR` 常量、表示当前页面的渲染是服务端渲染还是客户端渲染

`this.hasSpaCacheData` 常量 、 表示当前页面内是否有伪 `pwa` 的数据

### 更多 待续....

### Demo 演示（有点丑,别介意）

[http://demo.zz.bigerfe.com](http://demo.zz.bigerfe.com)

### 社区交流

可以加作者微信:`223344386`,备注"进群".

### 作者

笔  名: 前端双月 (zz_jesse)

公众号: 前端技术江湖

![](https://github.com/Bigerfe/koa-react-ssr/blob/v1/docs/imgs/wxgzh.jpg?raw=true)
