const { model, Schema } = require('mongoose');

const product = new Schema({
    name: String,
    description: String,
    url: String
});

const Product = model('Product', product);

module.exports = Product;