console.log('jjjjjj');

console.log(process.pid);

setInterval(()=>{
    console.log(100)
},1000)


process.stdin.on('data',function (data) {
    if(data.toString()==='exit'){
        process.exit();
    }
});