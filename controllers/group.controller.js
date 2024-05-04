const groupService = require('../services/group.service');

async function getAllGroups(req, res) {
    const groups = await groupService.getAllGroups();
    return res.status(200).json(groups);
}

async function getGroupByIdWithStudents(req, res) {
    const group = await groupService.getGroupByIdWithStudents(req.params.id);
    return res.status(200).json(group);
}

async function createGroup(req, res) {
    const group = await groupService.createGroup(req.body);
    return res.status(201).json(group);
}

async function updateGroup(req, res) {
    const group = await groupService.updateGroup(req.params.id, req.body);
    return res.status(200).json(group);
}

async function deleteGroup(req, res) {
    await groupService.deleteGroup(req.params.id);
    return res.status(204).send();
}

module.exports = {
    getAllGroups,
    getGroupByIdWithStudents,
    createGroup,
    updateGroup,
    deleteGroup
}