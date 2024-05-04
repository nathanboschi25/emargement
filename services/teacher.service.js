const {Teacher} = require('../models');

async function getAllTeachers() {
    return Teacher.findAll();
}

async function getTeacherById(id) {
    return Teacher.findByPk(id);
}

async function createTeacher(teacher) {
    return Teacher.create(teacher);
}

async function updateTeacher(id, teacher) {
    return Teacher.update(teacher, {
        where: {
            id: id
        },
        returning: true
    });
}

async function deleteTeacher(id) {
    return Teacher.destroy({
        where: {
            id: id
        }
    });
}

function extractTeacherFromString(teachers, string) {
    const teacher = teachers.find(name => string.includes(name));
    return teacher ? teacher : '- - -';
}

module.exports = {
    getAllTeachers,
    getTeacherById,
    createTeacher,
    updateTeacher,
    deleteTeacher,
    extractTeacherFromString
}