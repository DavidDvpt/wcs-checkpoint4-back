const express = require('express');
const { jwtDecode } = require('../../middlewares');

const router = express.Router();
const authCheck = require('./authCheck');

router.use(jwtDecode);

router.use('/authCheck', authCheck);

module.exports = router;
