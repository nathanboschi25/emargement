const {Group, Student} = require('../models')

async function getAllGroups() {
    return Group.findAll();
}

async function getGroupByIdWithStudents(id) {
    return Group.findByPk(id, {
        include: Student
    });
}

async function createGroup(group) {
    return Group.create(group);
}

async function updateGroup(id, group) {
    return Group.update(group, {
        where: {
            id: id
        },
        returning: true
    });
}

async function deleteGroup(id) {
    return Group.destroy({
        where: {
            id: id
        }
    });
}

module.exports = {
    getAllGroups,
    getGroupByIdWithStudents,
    createGroup,
    updateGroup,
    deleteGroup
}