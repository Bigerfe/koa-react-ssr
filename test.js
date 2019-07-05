var mysql      = require('mysql');
var connection = mysql.createConnection({
    host: '10.70.74.186',
  user     : 'root',
  password : '123',
    database: 'circle-parts-db'
});
 
connection.connect();
 
connection.query('SELECT id,linkName,linkUrl,addTime from tbLink;', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', JSON.stringify(null));
});

connection.end();