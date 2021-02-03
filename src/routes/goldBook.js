const express = require('express');
const prisma = require('../prismaClient');

const router = express.Router();

/**
 * GET /api/v1/goldBook
 */
router.get('/', async (req, res, next) => {
  const { limit = '' } = req.query;
  try {
    let results;
    if (limit !== '') {
      results = await prisma.goldBook.findMany({
        take: 10,
        orderBy: {
          id: 'desc',
        },
      });
    } else {
      results = await prisma.goldBook.findMany();
    }
    res.status(200).json(results);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/v1/goldBook/:id
 */
router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const results = await prisma.goldBook.findUnique({
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
 * POST /api/v1/goldBook
 */
router.post('/', async (req, res, next) => {
  const { role } = req.body;
  try {
    const results = await prisma.goldBook.create({
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
 * POST /api/v1/goldBook/:id
 */
router.post('/', async (req, res, next) => {
  const { id } = req.params;
  const { role } = req.body;
  try {
    const results = await prisma.goldBook.update({
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
 * DELETE /api/v1/goldBook/:id
 */
router.post('/', async (req, res, next) => {
  const { id } = req.params;
  try {
    const results = await prisma.goldBook.delete({
      where: {
        id: parseInt(id, 10),
      },
    });
    res.status(200).json(results);
  } catch (error) {
    next(error);
  }
});
