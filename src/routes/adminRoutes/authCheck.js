const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.get('/', (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    res.status(202).json(decoded);
  } catch (err) {
    res.status(401);
    next(err);
  }
});

module.exports = router;
