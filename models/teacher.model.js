const {DataTypes} = require('sequelize')

const sequelize = require('../configs/db.config')

/**
 * @openapi
 * components:
 *   schemas:
 *     Teacher:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: The teacher's name
 *           example: John Doe
 *           required: true
 *           unique: true
 *     CompleteTeacher:
 *       allOf:
 *         - $ref: '#/components/schemas/Teacher'
 *         - $ref: '#/components/schemas/TableBase'
 */
const Teacher = sequelize.define('Teacher', {
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

module.exports = Teacher