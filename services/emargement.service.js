const {getLogoToBase64, renderEmargementTemplateToHtmlString} = require("./tools.service");

const html2pdf = require('html-pdf-node');

/**
 * Get the emargement pdf under string format for a group at a specific date
 * @param res {object} The response object
 * @param group {object} The group to get the emargement for | {name: string, students: [{name: string}]}
 * @param events {object[]} The events for the emargement document | [{name: string, startTime: string, endTime: string, teacher: string}]
 * @param date {string} The date to get the emargement for | string (format: 'YYYY-MM-DD')
 * @param deptId {string} The department id to get the emargement for | string (default: 'iut')
 * @returns {string} the pdf under string format
 */
async function getEmargementPdf(res, group, events, date) {
    const dep_logo = await getLogoToBase64(group.department || 'iut');
    const html = await renderEmargementTemplateToHtmlString(group, events, date, dep_logo);
    console.log(group, events, date, dep_logo)
    const options = {
        format: 'A4',
        margin: {top: '25px', right: '25px', bottom: '65px', left: '25px'},
        printBackground: true,
        displayHeaderFooter: true,
        footerTemplate: '<div style="width: 100%; font-size: 9px; text-align: center"><b>Page <span class="pageNumber"></span>/<span class="totalPages"></span></b><br>' +
            'Fiche générée le '+ (new Date()).toLocaleDateString('fr-FR') +' à '+ (new Date()).toLocaleTimeString('fr-FR') +' avec emargement-iut © Nathan BOSCHI\n</div>'
    };
    const file = {content: html};
    const pdf = await html2pdf.generatePdf(file, options);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `inline; filename="${group.name}_${date}.pdf"`);
    res.send(pdf);
    return res;
}

module.exports = {
    getEmargementPdf
}