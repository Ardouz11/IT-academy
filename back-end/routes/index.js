var express = require('express');
var router = express.Router();
var trainings = require('./trainings');
router.use('/api/trainings', trainings);
var customer = require('./customer');
router.use('/api/customer', customer);
var contactus = require('./contactus');
router.use('/api/contactus', contactus);
module.exports = router;