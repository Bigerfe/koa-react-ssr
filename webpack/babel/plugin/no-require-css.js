
/**
 * 删除 css 的引入
 * 可能社区已经有现成的插件但是不想费劲儿找了，还是自己写一个吧。^_^!
 * @param {*} param0 
 */
module.exports = function ({ types: babelTypes }) {
    console.log('no-require-css 执行');
    return {
        name: "no-require-css",
        visitor: {
            ImportDeclaration(path, state) {
                let importFile = path.node.source.value;
                if(importFile.indexOf('.scss')>-1){
                    //如果引入了 css 需要干掉
                    path.remove();
                }
            }
        }
    };
};