const express = require('express');
const router = express.Router();
const path = require('path');
const Form = require('../form');


const urlEncodedParser = bodyparser.urlencoded({extended:false})

router.use((req,res,next)=>{
    console.log("Time:",Date.now());
    next();
});

router.use(express.static(path.join(__dirname, '..', '..', 'client')));


router.post('/form', (req,res)=>{
    const {email, text} = req.body;
    const form =  new Form({email:email, text:text});
    form.save().then(()=>console.log('New message!'));
    res.json('done...');
});


module.exports = router;