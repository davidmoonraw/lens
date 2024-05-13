const express = require('express');
const router = express.Router();
const path = require('path');

router.use((req,res,next)=>{
    console.log("Time:",Date.now());
    next();
});

router.use(express.static(path.join(__dirname, '..', '..', 'client')));

module.exports = router;