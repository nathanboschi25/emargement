const iCal = require('node-ical');
const {getAllTeachers, extractTeacherFromString} = require("./teacher.service");


async function getEvents(calendarUrl, startDate) {
    try {
        const data = await iCal.async.fromURL(calendarUrl);
        if (!data) {
            return [];
        }

        const events = Object.values(data).filter(event => {
            return event.type === 'VEVENT' && event.start.toLocaleDateString() === startDate.toLocaleDateString();
        }).sort((a, b) => {
            return a.start - b.end;
        })


        const teachers = await getAllTeachers();
        const teachersNames = teachers.map(teacher => teacher.name);

        // convert events to a format that is easier to work with
        return events.map(event => {
            return {
                name: event.summary,
                startDate: event.start.toLocaleDateString('fr-FR'),
                endDate: event.end.toLocaleDateString('fr-FR'),
                startTime: event.start.toLocaleTimeString('fr-FR', {hour: '2-digit', minute: '2-digit'}),
                endTime: event.end.toLocaleTimeString('fr-FR', {hour: '2-digit', minute: '2-digit'}),
                teacher: extractTeacherFromString(teachersNames, event.description)
            }
        });
    } catch (error) {
        console.error('Error while fetching events from calendar:', error);
        return [];
    }

}

module.exports = {
    getEvents
}