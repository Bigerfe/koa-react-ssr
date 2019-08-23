export default {
    log:function (params) {
        console.log('1024');
    },
    say(){
        console.log('hello123');
    },
    //对象序列化，当然支持一层
    querySerialize(opt) {
        opt || (opt = {});

        const keys = Object.keys(opt);
        let str = '';
        keys.map(item => [
            str += `${item}=${opt[item]}&`
        ])

        return str;
    }
}