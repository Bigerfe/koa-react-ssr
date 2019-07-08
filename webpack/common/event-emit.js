/** 事件发布订阅  未写全
 * 参考：https://www.jianshu.com/p/e37ca8369162 
 * 
*/

class EventEmit{
    constructor(){
        this._events = {};
    }

    //添加
    on(type,handler){
        (this._events[type] || (this._events[type]=[])).push(handler);
    }



    //执行
    emit(type){
        let arr = this._events[type]||[];
        let payload = [].slice.call(arguments,1);

        arr.forEach(item => {
            item && item.apply(this,payload);
        });
    }

}

//直接导出对象
module.exports = new EventEmit();