const emargementService = require('../services/emargement.service');
const groupService = require('../services/group.service');
const eventService = require('../services/event.service');

async function getEmargementForGroupAndDate(req, res) {
    const {groupId, date} = req.params;
    if (!groupId) return res.status(400).send({message: '\'groupId\' is required'});
    if (!date) return res.status(400).send({message: '\'date\' is required'})

    const group = await groupService.getGroupByIdWithStudents(groupId);
    group.students = group.Students;
    delete group.Students;
    if (!group) return res.status(404).send({message: `Group with id ${groupId} not found`});
    if (!group.calendarUrl) return res.status(400).send({message: `Group with id ${groupId} has no calendarUrl`})
    if (!group.students) return res.status(400).send({message: `Group with id ${groupId} has no students`})

    const events = await eventService.getEvents(group.calendarUrl, new Date(date));
    if (!events) return res.status(404).send({message: `No events found for group with id ${groupId} and date ${date}`});
    res = emargementService.getEmargementPdf(res, group, events, (new Date(date)).toLocaleDateString('fr-FR'));
}

async function getWeekEmargementForGroup(req, res) {
    const {groupId, weekStart} = req.params;
    res.sendStatus(200);
    // TODO
}

async function getEmargementsForDate(req, res) {
    const {date} = req.params;
    res.sendStatus(200);
    // TODO
}

async function getWeekEmargements(req, res) {
    const {weekStart} = req.params;
    res.sendStatus(200);
    // TODO
}

module.exports = {
    getEmargementForGroupAndDate,
    getWeekEmargementForGroup,
    getEmargementsForDate,
    getWeekEmargements
}