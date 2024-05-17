const mongoose = require('mongoose');
const {Schema, model} = mongoose;

//Form collection
const formSchema = new Schema({
    email:String,
    text: String
});

const Form = model('Form',formSchema);

module.exports = Form;