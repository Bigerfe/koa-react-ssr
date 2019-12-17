import React,{useState} from 'react';
import {
    Link
} from 'react-router-dom';

let count=1, setCount;

console.log('count',count);
setCount = function (cb) {
    count = cb();

    return Index(count);
}

export default function Index() {
      
    console.log('render',count);
    //let [count,setCount] = useState(1);  

    return <div>
    <p>文章列表 hook</p>
    <p>count:{count}</p>
    <button onClick={() => setCount(() => count + 1)}>数字累加</button>
    </div>
       
}


