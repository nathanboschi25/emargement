require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(express.json());
app.use(cors())

app.use(express.static(path.join(__dirname, 'public')));

/**
 * @openapi
 * tags:
 *    name: Group
 *    description: Groups management
 */
const groupRouter = require('./routers/group.router');
app.use('/api/group', groupRouter);

/**
 * @openapi
 * tags:
 *    name: Student
 *    description: Students management
 */
const studentRouter = require('./routers/student.router');
app.use('/api/student', studentRouter);

/**
 * @openapi
 * tags:
 *    name: Teacher
 *    description: Teachers management
 */
const teacherRouter = require('./routers/teacher.router');
app.use('/api/teacher', teacherRouter);

/**
 * @openapi
 * tags:
 *    name: Emargement
 *    description: Emargement generation
 */
const emargementRouter = require('./routers/emargement.router');
app.use('/api/emargement', emargementRouter);

/**
 * @openapi
 * tags:
 *    name: API
 *    description: API documentation
 * /docs:
 *   get:
 *     summary: SwaggerUI API documentation
 *     tags: [API]
 *     responses:
 *       200:
 *         description: SwaggerUI API documentation
 *
 */
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./configs/swagger.config');
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.listen(process.env.NODE_PORT, async () => {
    console.log(`Server is running on http://localhost:${process.env.NODE_PORT}`);

    const sequelize = require('./configs/db.config');

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        await sequelize.sync({force: process.env.APP_STAGE === 'dev'});
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

    if (process.env.APP_STAGE === 'dev') {
        try {
            const {Group, Student, Teacher} = require('./models');

            const Groups = require('./data/exampleData/Group.json');
            await Group.bulkCreate(Groups);

            const Students = require('./data/exampleData/Student.json');
            await Student.bulkCreate(Students);

            const Teachers = require('./data/exampleData/Teacher.json');
            await Teacher.bulkCreate(Teachers);

        } catch (error) {
            console.error('Unable to create data:', error);
        }
    }
});