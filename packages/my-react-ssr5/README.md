# react ssr wds 结合 node server 实现热更新

使用react-hot-loader实现组件状态的保存

服务启动

```
npm i 
npm run start 
```
基于 wds 可以方便的实现热更新功能，但是如何将这个特性和 node server 集合在一起呢？

关键点是
wds的配置 port 设置，这个端口是配置热更新的请求端口，也就是 wds 的 http server。
另外就是node server 要加载 wds 的静态资源

准备好以上两部就可以实现热更新了。

其他的配置，请看代码.