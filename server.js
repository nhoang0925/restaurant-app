const express = require("express")
const app = express()
const cors = require('cors');
var db = require("./database.js");
const e = require("express");
const db_users = 'dbreservetable.users';


app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
    methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.get('/api/getTable',(req,res)=>{

    let capacity = req.query.capacity;

    let sql = "SELECT tables.table_id, capacity, isAvailable FROM tables WHERE tables.capacity=? AND tables.isAvailable=1";
  
    let response = {};
    db.query(sql, [capacity], (error, result) => {
      if (error) throw error;
      response = JSON.parse(JSON.stringify(result));
      return res.send(response);
    });
    
})

app.post('/api/reserve',(req,res)=>{
    const name = req.body.name;
    const phone = req.body.phone;
    const email = req.body.email;

    console.log(name)
    console.log(phone)
    console.log(email);


    const capacity = req.body.capacity;
    console.log(capacity)

    
    const sqlInsert = "INSERT INTO dbreservetable.reservations (name, phone, email, date, time, capacity) VALUES (?,?,?,?,?,?)";
    db.query(sqlInsert,[name, phone, email, date, time, capacity],(err,result)=>{
        console.log(result);
    });
});

app.listen(5000,()=>{
    console.log("Running on server 5000");
});