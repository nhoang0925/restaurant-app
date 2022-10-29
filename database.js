const mysql = require("mysql");

const db = mysql.createConnection({
  host: "database-reservetable.cd8rg4rdoacy.us-west-1.rds.amazonaws.com",
  user: "admin",
  password: "reservetable",
  database: "dbreservetable",
  acquireTimeout: 1000000,
});

db.connect(() => {
    console.log("Connected to database");
});

module.exports = db;