/**
 * node 端接口全部链接到一个入口,通过代码执行
 */
const utils = require('../common/utils');
const fs = require('fs');
const path = require('path');


const getToLinkModules = (folderPath,delname)=>{
    files = fs.readdirSync(folderPath); //读取路径
    const arr=[];
    files.forEach(function (file) {
        console.log(file);
        if (file) {
            let sname = file.match(/^(\w+\-?\w+)\.jsx?$/)[1];
            let formatName = utils.nameToCamelFormat(sname);
            if (formatName!==delname){
                arr.push({formatName,sname});
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
const modifyIndexContent = (targetFile,modules)=>{
    if(!targetFile || !modules) return null;

    let jsStr='';
    const exportArr=[];
    modules.forEach(item=>{
        jsStr+=`import ${item.formatName} from './${item.sname}';\r\n`
        exportArr.push(item.formatName);
    });



    jsStr += `export default { \r\n ${exportArr.join(',')} \r\n}`;

    fs.writeFileSync(targetFile,jsStr);
    
}

const taskNodeApiLink=()=>{
    const targetFile = path.resolve(__dirname, '../../server/api-common/index.js');
    const apiFolder = path.resolve(__dirname, '../../server/api-common/');
    const modules = getToLinkModules(apiFolder,'index');
    modifyIndexContent(targetFile,modules);
}

//node api 入口链接
taskNodeApiLink();