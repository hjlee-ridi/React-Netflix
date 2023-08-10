const mysql = require('mysql');
 
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '8975',
    database: 'netflix'
});
 
module.exports = db;