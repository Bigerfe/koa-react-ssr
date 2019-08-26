## 最轻，最全的  react ssr 应用开发骨架 
### 作者 

bigerfe , 张大胖 , 公众号 ： 前端张大胖

### 开发日志

- [x] 项目目录结构规划
- [x] 熟悉webpack 基本配置
- [x] babel 基本配置
- [x] react jsx 代码转换
- [x] 基于 wsd 的代码热更
- [x] react-router4引入
- [x] 动态路由，code split（按需加载）
- [x] 路由按需加载可控
- [x] css根据路由按需加载可控,css可打包到一个文件，不做按需加载 
- [x] 路由抽象配置供用户设置，无需关注底层处理代码
- [x] 公共代码提取
- [x] tree shaking  默认开启了
- [x] 同构开发
- [x] 构建配置文件拆分为3个 base,dev,prod
- [x] node 服务监听
- [x] node 同构开发
- [x] node api 接口独立开发处理，通过动态处理入口完成
- [x] 静态路由分治开发,无需关注路由如何配置
- [x] 根据路由查找组件
- [x] 组件找到后，进行服务端输出,
- [x] react 组件编写实时编译转换到 node 端
- [] 服务端数据拉取，然后渲染组件后 服务端输出,fetch同构还没写
- [x] 客户端和服务端渲节点校验,需要使用StaticRouter输出，不然 Link 组件无法使用
- [x] 开启服务端选然后需要基于 node 开启服务，wds 作为静态资源
- [x] 如果是非服务端渲染则开启 wds 作为服务 ，node 作为服务层和数据层
- [x] v16 中 使用 context 传递数据,记住使用规则，目前不需要对 context 进行更新
- [x] server 和 cli 找不到路由如何处理  单层路由通过最后增加 nomatch 路由
- [] 嵌套路由如何处理 404 [https://codepen.io/pshrmn/pen/KWeVrQ](https://codepen.io/pshrmn/pen/KWeVrQ)
- [] fetch同构
- [x] 环境判断，当前时服务端渲染还是 csr ( 通过路由唯一 path 处理)
- [] 使用 stream 生成组件
- [x] 页面 tdk 设置 
- [] 服务端渲染的热更新 如何设置，目前如果是 ssr 的页面，热更新无效
- [x] 路由按需后，服务端和客户端渲染标记对比失败(需要将动态路由转换成为静态路由即可)
- [] webpack 构建优化，区分各个环境，支持别名，各模块分包（充分利用缓存），hash 设置
- [] 兼容 ie9
- [x] css 内图片和 js 内图片的路径处理
- [] 构建配置，服务配置等配置的优化整理
- [] 数据脱水 注水 
- [] 如果服务端运行的组件里导入了 图片和资源文件，会报错。
- [x] 增加了一个特性，支持了 spa 数据缓存。只要访问访问过此页面，就不会再重新请求数据。
- [x] 数据处理方法内带入 params 和 search 数据
- [] 单页测试 e2e测试
- [] npm build:Start 导致 node 是dev，client 是 pro 环境
- [] redux
- [] 新建组件后，文件不能同步server 端
- [] 新加页面后，路由入口不能更新
- [] nomatch route 应该在入口最后
- [] conext 可传递到父组件
- [] didmount 代码可在父组件声明

## 资料
```
https://www.cnblogs.com/ysk123/p/9990082.html css压缩和提取到一个文件
https://www.jianshu.com/p/46bdacb4c7fd?utm_source=oschina-app 直观显示webpack构建日志
```
