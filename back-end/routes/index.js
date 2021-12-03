var express = require('express');
var router = express.Router();
var trainings = require('./trainings');
router.use('/trainings', trainings);
var customer = require('./customer');
router.use('/customer', customer);
var contactus = require('./contactus');
router.use('/contactus', contactus);
module.exports = router;