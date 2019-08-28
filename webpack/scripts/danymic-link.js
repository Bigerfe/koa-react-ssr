/**
 * node 端接口全部链接到一个入口,通过代码执行
 * react 路由入口 全部集中到一个入口
 */
const utils = require('../common/utils');
const fs = require('fs');
const path = require('path');
//TODO:此文件引入后保错，可能是babel 没有完成，暂时写死
//const config =  require('../../dist/server/src/config/project-config').default;

const args = process.argv;
const type = args[2];

const getToLinkModules = (folderPath, delname, isFile) => {

    files = fs.readdirSync(folderPath); //读取路径
    const arr = [];
    let firstItem = null;//导出后需要排在第一个
    files.forEach(function (file) {

        if (file.indexOf('.') === 0) return false;

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
                console.log(file);
                let sname = file.match(/^(\w+.*\w+)$/)[1];
                console.log(sname);
                let formatName = 'Route' + utils.nameToBigCamelFormat(sname);
                //TODO:代码重复判断和执行
                if (sname === 'index') {//第一个
                    firstItem = formatName;
                }

                if (formatName !== delname) {
                    arr.push({
                        formatName,
                        sname
                    });
                }
            }
        }
    });

    return {
        arr,
        firstItem
    };
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
        jsStr += `const ${item.formatName} = require('./${item.sname}').default;\r\n`
        exportArr.push(item.formatName);
    });

    jsStr += `module.exports = { \r\n ${exportArr.join(',')} \r\n}`;

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

    modules.arr.forEach(item => {
        jsStr += `import ${item.formatName} from '../pages/${item.sname}/config/route';\r\n`

        if (item.formatName !== modules.firstItem)
            exportArr.push(item.formatName);
    });

    jsStr += `export default [${modules.firstItem}, \r\n ${exportArr.join(',')} \r\n]`;

    fs.writeFileSync(targetFile, jsStr);

}

const taskNodeApiLink = (isServerRun) => {

    let writeFile = path.resolve(__dirname, '../../server/api-common/index.js');
    if (isServerRun) {//如果服务已运行 ，则直接写入到 dist 目录
        writeFile = path.resolve(__dirname, '../../dist/server/server/api-common/index.js');
    }
    const apiFolder = path.resolve(__dirname, '../../server/api-common/');
    const modules = getToLinkModules(apiFolder, 'index', true);
    modifyNodeApiIndexContent(writeFile, modules.arr);
}



const taskReactRouteLink = () => {
    const writeFile = path.resolve(__dirname, '../../src/routes/routes-muster.js');
    const targetFolder = path.resolve(__dirname, '../../src/pages/');
    const modules = getToLinkModules(targetFolder, '', false);

    console.log('taskNodeApiLinkmodule', modules);

    modifyReactRouteMusterContent(writeFile, modules);
}

console.log(args);

if (type === '--api') {
    //node api 入口链接
    taskNodeApiLink(true);
}

if (type === '--routes') {
    taskReactRouteLink();

    //react 路由生成
}

if (type === '--all') {//全部
    taskNodeApiLink();
    taskReactRouteLink();

}