var mysql = require('mysql');
// soal import mysql 
//contoh var db = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "modul10"
});
//soal

con.connect(function (err){
    if(err) throw err;
});

module.exports = con;