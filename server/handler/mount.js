const express = require('express');
const router = express.Router();
const path = require('path');
const { form, collection } = require('./index');

router.use(express.static(path.join(__dirname, '..', '..', 'client'))); // serve static files
router.use(express.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

router.post('/collection', collection) // products
router.post('/form', form); //contact us

module.exports = router;