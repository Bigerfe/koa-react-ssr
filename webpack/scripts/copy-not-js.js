/*******
 * 
 * 拷贝非 js 文件
 * 在发布到生产环境的时候会执行此文件
 */
const fs = require('fs');
const path  = require('path');


const FIELS=[
    {
        src:'../../server/krs-base/temp/ssr.html',
        dest: '../../dist/server/server/krs-base/temp/ssr.html'
    }
];

function copyFile() {
    FIELS.forEach(item=>{
        fs.copyFileSync(path.resolve(__dirname,item.src),path.resolve(__dirname,item.dest));
    })
}

copyFile();
console.log('htmls copy success');
console.log('please wait,webpack start building.....');