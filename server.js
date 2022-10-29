const express = require("express")
const app = express()
const cors = require('cors');
var db = require("./database.js");
const db_users = 'dbreservetable.users';


app.use(express.json());
app.use(cors());

app.post('/api/reserve',(req,res)=>{
    const size = req.body.size;
    const available = req.body.available;
    console.log(size)
    console.log(available)
    
    const sqlInsert = "INSERT INTO dbreservetable.profiles (size, available) VALUES (?,?)";
    db.query(sqlInsert,[size,available],(err,result)=>{
        console.log(result);
    });
});

app.listen(5000,()=>{
    console.log("Running on server 5000");
});