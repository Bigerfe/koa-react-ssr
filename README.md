# krs (koa2 + react16 + ssr) 应用开发骨架

`node8.5+` `babel7` `react-router5` `webpack4`

## 最清凉（轻量）的 react ssr 应用开发骨架 

* 上手快速: 都是你熟悉的事物，基于 koa2 react16 ssr 搭建
* 双模式无缝切换: 支持SSR/CSR两种渲染模式，只需更改配置属性即可，也可以对组件设置按需渲染模式
* 路由分治管理: 你写你的路由，我写我的路由，krs 自动合并，不再需要维护整个路由表
* 路由动静结合: 支持组件的按需加载设置，A 路由动态吧，B 路由静态
* 伪 pwa 支持: 访问过的路由中的 state 可按需设置本地缓存,页面二次访问可无接口请求
* 开放: 代码完全开放，纯白盒，完全可以作为个人的 `ssr` 学习参考资源

## 快速开始

### 快速的在本地跑起来

如何快速的让 `krs` 骨架在你的机器跑起来.

这里我们提供了一个脚手架，方便你快速创建项目,并进入开发。

```javascript

//创建项目
$ npm install mmkrs-cli -g
$ mmkrs -i ---> select project ---> <Your Project Name>
$ cd <Your Project Name>
$ npm i
$ npm run dev //本地开发监听模式
$ open http://<Your local ip>:8808

//快速创建页面
$ cd <Your Project Name>
$ mmkrs -i -----> select page ----> <Your  pageName>
$ open http://<Your local ip>:8808/<Your  pageName>

//结束
```

### 路由配置

如果你想配置一个页面的路由地址，那该如何配置呢？

为了方便维护和扩展，krs 把路由进行了分治管理，每个页面的路由都是独立的，只需要单独的配置即可。

* 在`src/pages` 目录下创建一个页面目录 如:detail
* 在 `detail/`内创建入口组件
* 在 `detail/config`内创建 `route.js` 这就是当前页面的路由配置文件


![图片](https://github.com/Bigerfe/koa-react-ssr/blob/v1/docs/imgs/krs-router-c.png?raw=true)


```javascript

import React from 'react';
import BaseBundle from '../../../routes/route-base-bundle';

const LazyPageCom = (props) => (
    <BaseBundle load={() => import(/*webpackChunkName:"chunk-detail"*/'../index')}>
        {(CompIndex) => <CompIndex {...props} />}
    </BaseBundle>
);

export default [
    {
        path:'/detail',
        component: LazyPageCom,
        exact:true
    },
    {
        path:'/detail/:id',
        component: LazyPageCom
    }
]

```

你只需要修改 `webpackChunkName` 的名称和 `export` 导出的数据即可，当然也可以对当前页面配置多个路由.

### 数据预取

上一步已经创建了一个页面的入口组件和路由的配置，那页面入口组件也没什么奇怪的，都是平时创建组件的方式。

只是增加了一内容。

* 需要继承一个 krs 的基础组件，为我们封装了一些基础数据获取和存储功能
* 需要设置 `static contextType = RootContext` 为的是让组件可以获得全局的数据
* 声明静态数据预取方法 `static async getInitialProps`,数据的获取就是从这个方法拿到的，这是一个同构方法 node 端和浏览器端都会调用
* 设置 `static async getInitialProps` 的返回数据，返回数据有一个固定的格式，下面代码会说明
* `componentDidMount`内是否需要做数据的更新，如果需要更新可以调用`getInitialProps`方法

具体代码

```javascript
import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import RootContext from '../../app/route-context';//自定义 context
import KrsPageBase from '../../krs-base/common/components/krs-page-base';//基础组件 页面组件都需要继承
import fetch from '../../common/fetch';//内置的 fech 模块


export default class Index extends KrsPageBase{

    constructor(props,context){
        super(props,context);
    }

    enableSpaDataCache=true;//开启 伪 pwa 数据缓存 

    //得到 context 对象
    static contextType = RootContext;

    //基础参数的带入
    //opt={query:{},params:{}}  
    static async getInitialProps(krsOpt){//数据预取
        

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
            Index.getInitialProps(this.props.krsOpt).then(data=>{
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


### 快捷键

上面已经将两个非常重要的内容说完了。但是每次手动需要创建这么多文件夹和页面也是很浪费时间的。
所以我这里在脚手架工具里提供了一个快捷命令，方便我们创建页面，通过命令代替手动创建.

```javascript
cd 项目目录
mmkrs-cli -i --->select page ---> 输入 pagename

```
操作完后就可以看到你配置的页面路由已生效。

![图片](https://github.com/Bigerfe/koa-react-ssr/blob/v1/docs/imgs/krs-page-show.jpg?raw=true)

### Demo 演示（有点丑,别介意）

[http://demo.krs.bigerfe.com](http://demo.krs.bigerfe.com)

### 社区交流



### 作者

[建设中... http://bigerfe.com](http://bigerfe.com)

笔  名: 张大胖 

公众号: 前端张大胖

