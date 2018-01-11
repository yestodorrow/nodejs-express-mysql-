var mysql=require("mysql");

var connection={

}
connection.createConnection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"test",
    port:3306
})
exports.getConnection=connection.createConnection;