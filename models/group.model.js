const {DataTypes} = require('sequelize')

const sequelize = require('../configs/db.config')

/**
 * @openapi
 * components:
 *   schemas:
 *     Group:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: The group's name
 *           example: BUT INFORMATIQUE - 2023/2024 - S4 Alt1
 *           required: true
 *         calendarUrl:
 *           type: string
 *           description: The group's calendar URL
 *           example: https://example.com/calendar.ics
 *           required: true
 *         department:
 *           type: string
 *           description: The group's department
 *           example: info
 *           required: true
 *           enum: [cs, gaco, gccd, geii, info, iut, mmi, mp, mt2e, rt, tc]
 *     CompleteGroup:
 *       allOf:
 *         - $ref: '#/components/schemas/Group'
 *         - $ref: '#/components/schemas/TableBase'
 *     CompleteGroupWithStudents:
 *       allOf:
 *         - $ref: '#/components/schemas/CompleteGroup'
 *         - type: object
 *           properties:
 *             Students:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/CompleteStudent'
 */
const Group = sequelize.define('Group', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    calendarUrl: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    department: {
        //enum: cs, gaco, gccd, geii, info, iut, mmi, mp, mt2e, rt, tc
        type: DataTypes.ENUM('cs', 'gaco', 'gccd', 'geii', 'info', 'iut', 'mmi', 'mp', 'mt2e', 'rt', 'tc'),
        allowNull: false,
        defaultValue: 'iut'
    }
})

module.exports = Group