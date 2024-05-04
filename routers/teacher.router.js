const express = require('express');
const teacherController = require('../controllers/teacher.controller');

const teacherRouter = express.Router();

/**
 * @openapi
 * /teacher:
 *   get:
 *     summary: Get all teachers
 *     tags: [Teacher]
 *     responses:
 *       200:
 *         description: List of teachers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/CompleteTeacher'
 */
teacherRouter.get('/', teacherController.getAllTeachers);

/**
 * @openapi
 * /teacher:
 *   post:
 *     summary: Create a teacher
 *     tags: [Teacher]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Teacher'
 *     responses:
 *       201:
 *         description: Teacher created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CompleteTeacher'
 *       400:
 *         description: Error
 *         content:
 *            string:
 *              example: Name is required
 */
teacherRouter.post('/', teacherController.createTeacher);

/**
 * @openapi
 * /teacher/{id}:
 *   put:
 *     summary: Update a teacher
 *     tags: [Teacher]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Teacher's id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Teacher'
 *     responses:
 *       200:
 *         description: Teacher updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CompleteTeacher'
 */
teacherRouter.put('/:id', teacherController.updateTeacher);

/**
 * @openapi
 * /teacher/{id}:
 *   delete:
 *     summary: Delete a teacher
 *     tags: [Teacher]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Teacher's id
 *     responses:
 *       200:
 *         description: Teacher deleted
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CompleteTeacher'
 */
teacherRouter.delete('/:id', teacherController.deleteTeacher);

module.exports = teacherRouter;