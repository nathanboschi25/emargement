const express = require('express');
const groupController = require('../controllers/group.controller');

const groupRouter = express.Router();

/**
 * @openapi
 * /group:
 *   get:
 *     summary: Get all groups
 *     tags: [Group]
 *     responses:
 *       200:
 *         description: List of groups
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/CompleteGroup'
 */
groupRouter.get('/', groupController.getAllGroups);

/**
 * @openapi
 * /group/{id}:
 *   get:
 *     summary: Get a group by id
 *     tags: [Group]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Group's id
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Group found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CompleteGroupWithStudents'
 */
groupRouter.get('/:id', groupController.getGroupByIdWithStudents);

/**
 * @openapi
 * /group:
 *   post:
 *     summary: Create a group
 *     tags: [Group]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Group'
 *     responses:
 *       201:
 *         description: Group created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CompleteGroup'
 *       400:
 *         description: Error
 */
groupRouter.post('/', groupController.createGroup);

/**
 * @openapi
 * /group/{id}:
 *   put:
 *     summary: Update a group
 *     tags: [Group]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Group's id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Group'
 *     responses:
 *       200:
 *         description: Group updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CompleteGroup'
 */
groupRouter.put('/:id', groupController.updateGroup);

/**
 * @openapi
 * /group/{id}:
 *   delete:
 *     summary: Delete a group
 *     tags: [Group]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Group's id
 *     responses:
 *       200:
 *         description: Group deleted
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CompleteGroup'
 */
groupRouter.delete('/:id', groupController.deleteGroup);

module.exports = groupRouter;