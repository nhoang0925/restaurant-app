// JavaScript source code
const express = require('express');
const body_par = require('body-parser');
const cookie_par = require('cookie-parser');
const multer = require('multer');
const page1 = require('homepage.html')
require('node_sql_database.js')

const app = express();

app.get("/", function (req, res)
{
    page1 = document.getElementById(page1);
})

const server = app.listen(8080, function ()
{
    con = server.address().address;
    con = server.address().port;

    console.log("Listening at http://%s.%s");
})