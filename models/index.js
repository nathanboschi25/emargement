const Student = require('./student.model');
const Group = require('./group.model');
const Teacher = require('./teacher.model');

Student.belongsTo(Group, {
    foreignKey: 'groupId',
    onDelete: 'CASCADE'
});
Group.hasMany(Student, {
    foreignKey: 'groupId',
    onDelete: 'CASCADE'
});

/**
 * @openapi
 * components:
 *   schemas:
 *     TableBase:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The teacher's id
 *           example: 1
 *           required: true
 *           unique: true
 *           readOnly: true
 *           format: int64
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date of creation
 *           example: 2021-07-01T09:00:00.000Z
 *           readOnly: true
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The date of last update
 *           example: 2021-07-01T09:00:00.000Z
 */

module.exports = {
    Student,
    Group,
    Teacher
}