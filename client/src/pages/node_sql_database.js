// JavaScript source code
const mysql = require('mysql');

const con = mysql.createConnection(
{
    host: "database-reservetable.cd8rg4rdoacy.us-west-1.rds.amazonaws.com",
    user: "admin",
    password: "reservetable",
    database: "dbreservetable"
});

con.connect(function (err)
{
    if (err) throw err;
    console.log("Connection Successful");
});

module.exports = con;