const jwt = require('jsonwebtoken');
const express = require('express');
const prisma = require('../prismaClient');

const { decodePassword } = require('../util');

const router = express.Router();

router.post('/', async (req, res, next) => {
  const { login, password } = req.body;

  try {
    // check if this admin exists in database
    const family = await prisma.family.findUnique({
      where: {
        login,
      },
      include: {
        realEstate: true,
        admin: true,
      },
    });

    // if no login found => 401
    if (!family) {
      res.status(401).json('invalid user');
      throw new Error('User does not exists');
    }

    // if valid, check password
    const isValid = decodePassword(password, family.password);

    // if bad password => 401
    if (!isValid) {
      res.status(401).json({ err: 'invalid password' });
      throw new Error('Invalid password');
    }

    // check role
    if (!family.admin.role) {
      res.status(401).json('invalid role');
      throw new Error('no role for this user');
    }

    // if valid, then create a new token
    const token = jwt.sign(
      {
        login: family.login,
        role: family.admin.role,
      },
      process.env.SECRET,
      {
        expiresIn: '7d',
      }
    );

    delete family.password;

    // and then respond with the jwt in json
    res.status(200).json({
      token,
      family,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
