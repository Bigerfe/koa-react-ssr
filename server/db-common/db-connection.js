/**
 * 数据库连接基础库
 */
import config from '../krs-base/config';

export default {
    getConn(){
        const mysql = require('mysql');
        const connection = mysql.createConnection(config.db);
        connection.connect();
        return connection;
    },
    query(sql){
        const connection  = this.getConn();
        return new Promise(resolve=>{
            connection.query(sql, function (error, results, fields) {
                if (error) throw error;
                if(!results)
                results=[];
                resolve(JSON.stringify(results));
            });
        }).finally(e=>{
            connection.end();
        });
    },
    modify(sql){

    }
}