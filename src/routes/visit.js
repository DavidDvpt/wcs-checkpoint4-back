const express = require('express');
const prisma = require('../prismaClient');

const router = express.Router();

/**
 * GET /api/v1/visit
 */
router.get('/', async (req, res, next) => {
  try {
    const results = await prisma.visit.findMany();
    res.status(200).json(results);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/v1/visit/:id
 */
router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const results = await prisma.visit.findUnique({
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
 * POST /api/v1/visit
 */
router.post('/', async (req, res, next) => {
  const { role } = req.body;
  try {
    const results = await prisma.visit.create({
      data: {
        role,
      },
    });
    res.status(201).json(results);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /api/v1/visit/:id
 */
router.put('/', async (req, res, next) => {
  const { id } = req.params;
  const { role } = req.body;
  try {
    const results = await prisma.visit.update({
      where: {
        id: parseInt(id, 10),
      },
      data: {
        role,
      },
    });
    res.status(200).json(results);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /api/v1/visit/:id
 */
router.delete('/', async (req, res, next) => {
  const { id } = req.params;
  try {
    const results = await prisma.visit.delete({
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
