const mongoose = require('mongoose');
require('dotenv').config({path:".env"});
const {MONGO_USER, MONGO_KEY, MONGO_HOSTNAME, MONGO_DB} = process.env;

//Non existent db gets created automatically
const URI = `mongodb+srv://${MONGO_USER}:${MONGO_KEY}@${MONGO_HOSTNAME}/${MONGO_DB}?retryWrites=true&w=majority&appName=Cluster0`
mongoose.connect(URI).catch(error => ()=>console.log('MongoDB connection failed/n',error));

mongoose.connection.on('connected', () => console.log('MongoDB connected'));
mongoose.connection.on('disconnected', () => console.log('MongoDB disconnected'));

module.exports = mongoose;