export default {

    /**
     * 把名称改为小驼峰格式
     */
    nameToCamelFormat: (name) => {
        return name.replace(/(\-)(\w)/g, (s0, s1, s2) => {
            //把规则进行替换成方法签名
            return s2.toUpperCase();
        });
    },
    /**
     * 判断是否是按需加载的组件
     * @param {函数或组件} component 
     */
    checkIsAsyncRoute :(component) => {
        var str = component.toString();
        return str.indexOf('require(') > -1 && str.indexOf('.resolve().') > -1;
    }

}