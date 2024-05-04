const {DataTypes} = require('sequelize')

const sequelize = require('../configs/db.config')

/**
 * @openapi
 * components:
 *   schemas:
 *     Student:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: The student's name
 *           example: Jane Doe
 *           required: true
 *           unique: true
 *         groupId:
 *           type: integer
 *           description: The student's group ID
 *           example: 1
 *           required: false
 *           unique: false
 *           default: null
 *     CompleteStudent:
 *       allOf:
 *         - $ref: '#/components/schemas/Student'
 *         - $ref: '#/components/schemas/TableBase'
 */
const Student = sequelize.define('Student', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

module.exports = Student