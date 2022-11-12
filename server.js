const express = require("express")
const app = express()
const cors = require('cors');
var multer = require('multer');
var upload = multer(); 
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
var db = require("./database.js");
const db_users = 'dbreservetable.users';


app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
    methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD']
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(upload.array());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true })); 

app.get('/api/getTable',(req,res)=>{
 
    let date = req.query.date;
    let time = req.query.time;
    let capacity = req.query.capacity;

    //let sql = "SELECT tables.table_id, capacity, isAvailable FROM tables WHERE tables.capacity=? AND tables.isAvailable=1";

    let sql = "SELECT table_id, capacity FROM tables WHERE NOT EXISTS (SELECT 1 FROM reservations WHERE reservations.table_id = tables.table_id AND reservations.date=? AND reservations.time=?) AND tables.capacity=?";
  
    let response = {};
    db.query(sql, [date, time, capacity], (error, result) => {
      if (error) throw error;
      response = JSON.parse(JSON.stringify(result));
      return res.send(response);
    });
    
})

app.post('/api/reserve',(req,res)=>{
    const name = req.body.name;
    const phone = req.body.phone;
    const email = req.body.email;
    const date = req.body.date;
    const time = req.body.time;
    const capacity = req.body.capacity;
    const table = req.body.table;

    console.log(name)
    console.log(phone)
    console.log(email)
    console.log(date)
    console.log(time)
    console.log(capacity)
    console.log(table);

    
    const sqlInsert = `INSERT INTO dbreservetable.reservations (name, phone, email, date, time, capacity, table_id) VALUES ('${req.body.name}','${req.body.phone}','${req.body.email}','${req.body.date}','${req.body.time}', '${req.body.capacity}','${req.body.table}')`;
    db.query(sqlInsert,(err,result)=>{
        console.log(result);
    });
});

app.listen(5000,()=>{
    console.log("Running on server 5000");
});