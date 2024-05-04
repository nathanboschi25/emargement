const express = require('express');
const emargementController = require('../controllers/emargement.controller');

const emargementRouter = express.Router();

/**
 * @openapi
 * /emargement/{groupId}/{date}:
 *   get:
 *     summary: Get emargement for a group and a date
 *     tags: [Emargement]
 *     parameters:
 *       - in: path
 *         name: groupId
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *       - in: path
 *         name: date
 *         required: true
 *         schema:
 *           type: string
 *           format: date
 *           example: 2024-04-12
 *     responses:
 *       200:
 *         description: Emargement for the group and the date
 *         content:
 *           application/pdf:
 *             schema:
 *               type: string
 *               format: binary
 */
emargementRouter.get('/:groupId/:date', emargementController.getEmargementForGroupAndDate);

module.exports = emargementRouter;