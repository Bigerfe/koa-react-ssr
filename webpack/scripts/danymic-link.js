/**
 * node 端接口全部链接到一个入口,通过代码执行
 */
const utils = require('../common/utils');
const fs = require('fs');
const path = require('path');



const getToLinkModules = (folderPath, delname, isFile) => {
    files = fs.readdirSync(folderPath); //读取路径
    const arr = [];
    files.forEach(function (file) {

        console.log(file);

        let stat = fs.statSync(path.join(folderPath, file));
        if (stat.isFile() && isFile) {
            //记录文件
            let sname = file.match(/^(\w+.*\w+)\.jsx?$/)[1];
            let formatName = utils.nameToCamelFormat(sname);
            if (formatName !== delname) {
                arr.push({
                    formatName,
                    sname
                });
            }
        } else {
            if (!isFile) {
                //记录目录
                let sname = file.match(/^(\w+.*\w+)$/)[1];
                let formatName ='Route'+utils.nameToBigCamelFormat(sname);
                if (formatName !== delname) {
                    arr.push({
                        formatName,
                        sname
                    });
                }
            }
        }
    });

    return arr;
}

/**
 * 把入口写入文件 并 导出
 * @param {*} targetFile 
 * @param {*} modules 
 */
const modifyNodeApiIndexContent = (targetFile, modules) => {
    if (!targetFile || !modules) return null;

    let jsStr = '';
    const exportArr = [];
    modules.forEach(item => {
        jsStr += `import ${item.formatName} from './${item.sname}';\r\n`
        exportArr.push(item.formatName);
    });

    jsStr += `export default { \r\n ${exportArr.join(',')} \r\n}`;

    fs.writeFileSync(targetFile, jsStr);

}


/**
 * 把入口写入到文件 并 导出
 * @param {*} targetFile 
 * @param {*} modules 
 */
const modifyReactRouteMusterContent = (targetFile, modules) => {
    if (!targetFile || !modules) return null;

    let jsStr = '';
    const exportArr = [];
    modules.forEach(item => {
        jsStr += `import ${item.formatName} from '../page/${item.sname}/config/route';\r\n`
        exportArr.push(item.formatName);
    });

    jsStr += `export default [ \r\n ${exportArr.join(',')} \r\n]`;

    fs.writeFileSync(targetFile, jsStr);

}

const taskNodeApiLink = () => {
    const writeFile = path.resolve(__dirname, '../../server/api-common/index.js');
    const apiFolder = path.resolve(__dirname, '../../server/api-common/');
    const modules = getToLinkModules(apiFolder, 'index', true);
    modifyNodeApiIndexContent(writeFile, modules);
}



const taskReactRouteLink = () => {
    const writeFile = path.resolve(__dirname, '../../src/routes/routes-muster.js');
    const targetFolder = path.resolve(__dirname, '../../src/page/');
    const modules = getToLinkModules(targetFolder, '', false);

    console.log('taskNodeApiLinkmodule', modules);

    modifyReactRouteMusterContent(writeFile, modules);
}

//node api 入口链接
taskNodeApiLink();

taskReactRouteLink();

//react 路由生成