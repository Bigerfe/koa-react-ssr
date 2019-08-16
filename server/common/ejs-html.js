import ejs from 'ejs';
import  path from 'path';


export default async function (file, data) {

    const ctx = this;

    data || (data = {});

   // Object.assign(data, ctx.CommonInfo || {}); //合并基础数据

    return new Promise(resolve => {
        ejs.renderFile(path.resolve(__dirname,file), data, {
            rmWhitespace: true
        }, function (err, str) {
            // str => 输出绘制后的 HTML 字符串
            if (err) {
                throw Error(err);
            }

            resolve(str);
        });
    });
}