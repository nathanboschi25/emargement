const StudentService = require('../services/student.service');

async function getAllStudents(req, res) {
    try {
        const students = await StudentService.getAllStudents();
        res.json(students);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

async function getStudent(req, res) {
    try {
        const id = req.params.id;
        const student = await StudentService.getStudent(id);
        res.json(student);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

async function addStudent(req, res) {
    try {
        const student = req.body;
        const newStudent = await StudentService.addStudent(student);
        res.json(newStudent);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

async function editStudent(req, res) {
    try {
        const student = req.body;
        const updatedStudent = await StudentService.editStudent(student);
        res.json(updatedStudent);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

async function deleteStudent(req, res) {
    try {
        const student = req.body;
        res.json(await StudentService.deleteStudent(student));
    } catch (error) {
        res.status(500).send(error.message);
    }
}

async function moveStudentToGroup(req, res) {
    try {
        const studentId = req.params.studentId;
        const groupId = req.params.groupId;
        res.json(await StudentService.editStudent({id: studentId, groupId}));
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {
    getAllStudents,
    getStudent,
    addStudent,
    editStudent,
    deleteStudent,
    moveStudentToGroup
}