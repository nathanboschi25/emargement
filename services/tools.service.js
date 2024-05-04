const ejs = require('ejs');
const fs = require('fs');
const path = require('path');


async function getLogoToBase64(deptId) {
    return fs.readFileSync(path.join(__dirname, '../assets', deptId + '.png'), {encoding: 'base64'});
}

async function renderEmargementTemplateToHtmlString(group, events, date, dep_logo) {
    const template = fs.readFileSync(path.join(__dirname, '../templates', 'emargementDocument.ejs'), {encoding: 'utf-8'});
    return ejs.render(template, {group, events, date, dep_logo});
}

module.exports = {
    getLogoToBase64,
    renderEmargementTemplateToHtmlString
}