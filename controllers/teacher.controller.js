const teacherService = require("../services/teacher.service");

async function getAllTeachers(req, res) {
    const teachers = await teacherService.getAllTeachers();
    return res.status(200).json(teachers);
}

async function createTeacher(req, res) {
    if (!req.body.name) {
        return res.status(400).json({message: 'Name is required'});
    }
    return res.status(201).json(await teacherService.createTeacher(req.body));
}

async function updateTeacher(req, res) {
    if (!req.params.id) {
        return res.status(400).json({message: 'ID is required'});
    }
    if (!req.body.name) {
        return res.status(400).json({message: 'Name is required'});
    }
    return res.status(200).json(await teacherService.updateTeacher(req.params.id, req.body));
}

async function deleteTeacher(req, res) {
    if (!req.params.id) {
        return res.status(400).json({message: 'ID is required'});
    }
    await teacherService.deleteTeacher(req.params.id);
    return res.status(204).send();
}

module.exports = {
    getAllTeachers,
    createTeacher,
    updateTeacher,
    deleteTeacher
};