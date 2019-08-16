## 自建 基于react的开发脚手架

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
- [] 如果是非服务端渲染则开启 wds 作为服务 ，node 作为服务层和数据层
- [x] v16 中 使用 context 传递数据,记住使用规则，目前不需要对 context 进行更新
- [] server 和 cli 找不到路由如何处理？
- [] fetch同构
- [] 环境判断，当前时服务端渲染还是 csr



## 资料
```
https://www.cnblogs.com/ysk123/p/9990082.html css压缩和提取到一个文件
https://www.jianshu.com/p/46bdacb4c7fd?utm_source=oschina-app 直观显示webpack构建日志
```
