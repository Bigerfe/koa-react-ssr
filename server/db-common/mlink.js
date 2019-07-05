/**
 *  友情链接
 */

import dbConnection from './db-connection';

export default {
    getAll(){
        const sql ='SELECT id,linkName,linkUrl,addTime from tbLink;';
        return dbConnection.query(sql);
    }
}