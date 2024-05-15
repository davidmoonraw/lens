const Form = require('../form');

const form = ('/form', async (req,res)=>{
    const {email, text} = req.body;
    const form =  new Form({email:email, text:text});
    await form.save().then(()=>console.log('New message!'));
    res.json('done...');
});

module.exports = {form};