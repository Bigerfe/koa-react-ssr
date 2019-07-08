/**
 * 需要封装一个请求模块
 * 可支持 post - form|json
 * 支持 get 的请求
 *
 * 可以根据 process.env.IS_DEV 判断是否是线上环境
 * 
 * 接口api 路径规则
 * 
 * _api/article-info/get-detail-content : _api(固定前缀)/controller name/action name  路径不允许出现大写
 * 
 */

const requestHost= 'http://localhost:8088';

