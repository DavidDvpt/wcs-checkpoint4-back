const express = require('express');
const prisma = require('../prismaClient');

const router = express.Router();

/**
 * GET /api/v1/realEstate
 */
router.get('/', async (req, res, next) => {
  try {
    const results = await prisma.realEstate.findMany({
      include: {
        family: true,
      },
    });
    res.status(200).json(results);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/v1/realEstate/:id
 */
router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  const { selectedDate = '' } = req.query;
  let results;
  try {
    if (selectedDate !== '') {
      results = await prisma.$queryRaw(
        `SELECT SUM(v.quantity) AS total FROM realEstate re JOIN visit v ON v.realEstateId = re.id WHERE v.date = DATE('${selectedDate}') AND re.id = ${id}`
      );
    } else {
      results = await prisma.realEstate.findUnique({
        where: {
          id: parseInt(id, 10),
        },
      });
    }
    res.status(200).json(results);
  } catch (error) {
    next(error);
  }
});

/**
 * POST /api/v1/realEstate
 */
router.post('/', async (req, res, next) => {
  const {
    name,
    imageName,
    description,
    longitude,
    latitude,
    isActif,
    isVisitable,
    maxVisite,
  } = req.body;
  try {
    const results = await prisma.realEstate.create({
      data: {
        name,
        imageName,
        description,
        longitude: parseFloat(longitude, 10),
        latitude: parseFloat(latitude, 10),
        isActif,
        isVisitable,
        maxVisite: parseInt(maxVisite, 10),
      },
    });
    res.status(201).json(results);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /api/v1/realEstate/:id
 */
router.put('/:id', async (req, res, next) => {
  const { id } = req.params;
  const {
    name,
    imageName,
    description,
    longitude,
    latitude,
    isActif,
    isVisitable,
    maxVisite,
  } = req.body;
  try {
    const results = await prisma.realEstate.update({
      where: {
        id: parseInt(id, 10),
      },
      data: {
        name,
        imageName,
        description,
        longitude: parseFloat(longitude, 10),
        latitude: parseFloat(latitude, 10),
        isActif,
        isVisitable,
        maxVisite: parseInt(maxVisite, 10),
      },
    });
    res.status(200).json(results);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /api/v1/realEstate/:id
 */
router.delete('/', async (req, res, next) => {
  const { id } = req.params;
  try {
    const results = await prisma.realEstate.delete({
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
