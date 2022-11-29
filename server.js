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
    let size = req.query.size;

    let sql = "SELECT table_id, capacity FROM tables WHERE NOT EXISTS (SELECT 1 FROM reservations WHERE reservations.table_id = tables.table_id AND reservations.date=? AND reservations.time=?) AND tables.capacity=?";
  
    let response = {};
    db.query(sql, [date, time, size], (error, result) => {
      if (error) throw error;
      response = JSON.parse(JSON.stringify(result));
      return res.send(response);
    });
    
})

app.get('/api/getTableSmaller',(req,res)=>{
 
    let date = req.query.date;
    let time = req.query.time;
    let size = req.query.size;

    let sql = "SELECT table_id, capacity FROM tables WHERE NOT EXISTS (SELECT 1 FROM reservations WHERE reservations.table_id = tables.table_id AND reservations.date=? AND reservations.time=?) AND tables.capacity<?";

    let response = {};
    db.query(sql, [date, time, size], (error, result) => {
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
    const size = req.body.size;
    const table = req.body.table;
    const additionalTable = req.body.additionalTable;

    console.log(name)
    console.log(phone)
    console.log(email)
    console.log(date)
    console.log(time)
    console.log(size)
    console.log(table)
    console.log(additionalTable);

    if(additionalTable > null) {
        const sqlInsert2 = `INSERT INTO dbreservetable.reservations (name, phone, email, date, time, party_size, table_id) VALUES ('${req.body.name}','${req.body.phone}','${req.body.email}','${req.body.date}','${req.body.time}', '${req.body.size}','${req.body.additionalTable}')`;
        db.query(sqlInsert2,(err,result)=>{
            console.log(result);
    });          
    }

    const sqlInsert = `INSERT INTO dbreservetable.reservations (name, phone, email, date, time, party_size, table_id) VALUES ('${req.body.name}','${req.body.phone}','${req.body.email}','${req.body.date}','${req.body.time}', '${req.body.size}','${req.body.table}')`;
    db.query(sqlInsert,(err,result)=>{
        console.log(result);
    });  
});

app.post('/api/register',(req,res)=>{
    const user = req.body.user;
    const password = req.body.password;
    const email_r = req.body.email_r;
    const billing_address = req.body.billing_address;
    const mailing_address = req.body.mailing_address;

    console.log(user)
    console.log(password)
    console.log(email_r)
    console.log(billing_address)
    console.log(mailing_address)


    const sqlInsert = `INSERT INTO logins.loginlist (user, password, email, billing, mailling) VALUES ('${req.body.user}','${req.body.password}','${req.body.email_r}','${req.body.billing_address}','${req.body.mailing_address}')`;
    db.query(sqlInsert,(err,result)=>{
        console.log(result);
    });  
});

app.listen(5000,()=>{
    console.log("Running on server 5000");
});