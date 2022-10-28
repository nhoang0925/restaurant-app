const express = require("express")
const app = express()
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.post('/api/reserve',(req,res)=>{
    const size = req.body.size;
    const available = req.body.available;
    console.log(size)
    console.log(available)
});

app.listen(5000,()=>{
    console.log("Running on server 5000");
});