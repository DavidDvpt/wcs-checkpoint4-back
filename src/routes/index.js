const express = require('express');
const admin = require('./admin');
const family = require('./family');
const realEstate = require('./realEstate');
const goldBook = require('./goldBook');
const visit = require('./visit');

const router = express.Router();

router.use('/admin', admin);
router.use('/family', family);
router.use('/realEstate', realEstate);
router.use('/goldBook', goldBook);
router.use('/visit', visit);

module.exports = router;
