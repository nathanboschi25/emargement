const {Student} = require('../models');

async function getAllStudents() {
    return Student.findAll();
}

async function getStudent(id) {
    return Student.findByPk(id);
}

async function addStudent(student) {
    return Student.create(student);
}

async function editStudent(student) {
    return Student.update(student, {
        where: {
            id: student.id
        },
        returning: true
    });
}

async function deleteStudent(student) {
    return Student.destroy({
        where: {
            id: student.id
        },
        returning: true
    });
}

module.exports = {
    getAllStudents,
    getStudent,
    addStudent,
    editStudent,
    deleteStudent
}