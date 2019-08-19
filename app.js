/**
 * koa 服务启动文件
 */

//设置全局变量
global.__SERVER__=true;//当前时服务器渲染
global.__CLIENT__=false;

var app = require('./dist/server/server/app/server.js');
var http = require('http');
var config = require('./dist/server/server/config');
/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || config.appPort);
console.log(port);
// app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app.callback());

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
console.log('server start ......  http://localhost:'+config.appPort);
/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}


/**
 * 设置运行环境
 */
function setAppEnv(){
    process.env.NODE_ENV='development';
    process.env.IS_DEV = true;

    if(process.env.isActive){
        process.env.NODE_ENV = 'production';
        process.env.IS_DEV = fales;
    }

    console.log('env is', process.env.NODE_ENV);
}


setAppEnv();