const Form = require('../collection/form');
const Product = require('../collection/product');

const form = async (req, res) => {
    const { email, text } = req.body;
    const form = new Form({ email: email, text: text });
    await form.save().then(() => console.log('New message!'));
    res.json('done...');
};

const collection = async (req, res) => {

    const { page: { number } } = req.body;
    const skip = number == 1 ? 0 : (number-1) * 2;
    const products = await Product.find().sort().skip(skip).limit(2);
    if (products.length) {
        res.json({ content: true, payload: products });
    }
    else {
        res.json({ content: false });
    }
};

module.exports = { form, collection };