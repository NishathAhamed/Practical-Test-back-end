const mysql=require('mysql2/promise');

var mysqlpool=mysql.createPool({
      host:'localhost',
      user:'root',
      password:'Ahmed123@',
      database:'test_db'

});

module.exports=mysqlpool
