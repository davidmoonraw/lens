require('dotenv').config({path:'.env'});
require('./db');
const express = require('express');
const controller = require('./controller/main');

const {EXPRESS_PORT} = process.env;


const app = express();
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(controller);


app.listen(EXPRESS_PORT, ()=>{
    console.log(`Server is running on port ${EXPRESS_PORT}`);
});

