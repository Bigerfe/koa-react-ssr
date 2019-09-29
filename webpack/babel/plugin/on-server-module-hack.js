const mds = require('../../../src/config/enableHackClientModules');
//使用这个模块 可构建任何节点，当做字符串和占位处理
const  babelTemplate  = require("babel-template");
/**
 * 客户端模块在服务端运行增加 hack
 * @param {*} param0 
 */
module.exports = function ({ types: t }) {
    return {
        name: "on-server-module-hack",
        visitor: {
            ImportDeclaration(path, state) {
                let importModuleName = path.node.source.value;
                let dest = mds[importModuleName];
                if (dest){
                    let useName = path.node.specifiers && path.node.specifiers[0].local.name;

                    let preVariableAST = babelTemplate('const NAME={}');
                    path.replaceWith(
                        preVariableAST({
                            NAME: t.identifier(useName)
                        })
                    );


                    // path.replaceWithMultiple([
                    //     t.variableDeclaration('const', [t.variableDeclarator(t.Identifier(useName),t.ObjectProperty())])
                    // ]);
                }
            }
        }
    };
};