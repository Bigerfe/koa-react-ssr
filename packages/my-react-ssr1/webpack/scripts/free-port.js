//mac linux 释放指定端口

module.exports = function (port) {
    if (process.platform && process.platform !== 'win32') {
        //mac linux等
        const args = process.argv.slice(2);

        let portArg = args && args[0];
        if (portArg && portArg.indexOf('--') > 0) {
            port = portArg.split('--')[1];
        }
        let order = `lsof -i :${port}`;
        let exec = require('child_process').exec;
        exec(order, (err, stdout, stderr) => {
            if (err) {
                // return console.log(`查看端口命令出错 ${err}`);
            }
            stdout.split('\n').filter(line => {
                let p = line.trim().split(/\s+/);
                let address = p[1];
                if (address != undefined && address != "PID") {
                    exec('kill -9 ' + address, (err, stdout, stderr) => {
                        if (err) {
                            return console.log('释放指定端口失败！！');
                        }
                        console.log('port kill');
                    });
                }
            });
        });
    }
}