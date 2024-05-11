
const express = require('express');
require('dotenv').config({path:'.env'});
const {EXPRESS_PORT} = process.env;

const app = express();


app.get('/', (req,res)=>{
    res.json("lallalalallalala");
});

app.listen(EXPRESS_PORT, ()=>{
    console.log("foobar");
});

