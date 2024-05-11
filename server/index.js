
const express = require('express');

require('dotenv').config({path:'.env'});
const {EXPRESS_PORT} = process.env;
const controller = require('./controller/main');

const app = express();

app.use(controller);


app.listen(EXPRESS_PORT, ()=>{
    console.log("foobar");
});

