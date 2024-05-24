const { Schema, model } = require('mongoose');

//Form collection
const form = new Schema({
    email: String,
    text: String
});

const Form = model('Form', form);

module.exports = Form;