const express = require('express');
const router = express.Router();
const path = require('path');
const form = require('index');


router.use((req,res,next)=>{
    console.log("Time:",Date.now());
    next();
});

router.use(express.static(path.join(__dirname, '..', '..', 'client')));
router.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


router.post(form);

module.exports = router;