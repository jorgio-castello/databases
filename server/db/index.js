var mysql = require('mysql');
var password = require('../../config/mysqlPassword');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

let dbConnection = mysql.createConnection({
  user: 'root',
  password: password,
  database: 'chat'
});

dbConnection.connect(err =>{
  if (err) {
    throw err;
  }
});

module.exports = dbConnection;
