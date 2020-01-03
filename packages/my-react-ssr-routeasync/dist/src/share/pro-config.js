"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//双端公用的配置文件
var _default = {
  wdsPort: 9002,
  //wds 服务的运行端口
  nodeServerPort: 9001,
  //node server 的监听端口
  asyncComponentKey: '__IS_ASYNC_COMP_FLAG__' //标志组件是否是按需加载 turn | false

};
exports.default = _default;