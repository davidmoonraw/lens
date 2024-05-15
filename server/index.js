require('dotenv').config({path:'.env'});
require('./db');
const express = require('express');
const middleware = require('./handler/mount');

const {EXPRESS_PORT} = process.env;

const app = express();

app.use(middleware);

app.listen(EXPRESS_PORT, ()=>{
    console.log(`Server is running on port ${EXPRESS_PORT}`);
});