const express = require('express');
const prisma = require('../prismaClient');

const router = express.Router();

/**
 * GET /api/v1/family
 */
router.get('/', async (req, res, next) => {
  try {
    const results = await prisma.family.findMany({
      include: {
        realEstate: true,
        admin: true,
      },
    });
    res.status(200).json(results);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/v1/family/:id
 */
router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const results = await prisma.family.findUnique({
      where: {
        id: parseInt(id, 10),
      },
    });
    res.status(200).json(results);
  } catch (error) {
    next(error);
  }
});

/**
 * POST /api/v1/family
 */
router.post('/', async (req, res, next) => {
  const {
    firstname,
    lastname,
    imageName,
    description,
    isActif,
    password,
    kingdomRole,
    adminId,
  } = req.body;
  try {
    const results = await prisma.family.create({
      data: {
        firstname,
        lastname,
        imageName,
        description,
        isActif,
        password,
        kingdomRole,
        adminId: parseInt(adminId, 10) || null,
      },
    });
    res.status(201).json(results);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /api/v1/family/:id
 */
router.put('/', async (req, res, next) => {
  const { id } = req.params;
  const {
    firstname,
    lastname,
    imageName,
    description,
    isActif,
    password,
    kingdomRole,
    adminId,
  } = req.body;
  try {
    const results = await prisma.family.update({
      where: {
        id: parseInt(id, 10),
      },
      data: {
        firstname,
        lastname,
        imageName,
        description,
        isActif,
        password,
        kingdomRole,
        adminId: parseInt(adminId, 10) || null,
      },
    });
    res.status(200).json(results);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /api/v1/family/:id
 */
router.post('/', async (req, res, next) => {
  const { id } = req.params;
  try {
    const results = await prisma.family.delete({
      where: {
        id: parseInt(id, 10),
      },
    });
    res.status(204).json(results);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
