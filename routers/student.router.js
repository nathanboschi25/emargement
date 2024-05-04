const express = require('express');
const studentController = require('../controllers/student.controller');

const studentRouter = express.Router();


studentRouter.get('/', studentController.getAllStudents);

studentRouter.get('/:id', studentController.getStudent);

studentRouter.post('/', studentController.addStudent);

studentRouter.put('/:id', studentController.editStudent);

studentRouter.delete('/:id', studentController.deleteStudent);

studentRouter.patch('/:studentId/group/:groupId', studentController.moveStudentToGroup);

module.exports = studentRouter;