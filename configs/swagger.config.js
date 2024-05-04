const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
    failOnErrors: true,
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Emargement API',
            version: '1.0.0',
            description: 'Allowing to manage students, teachers and groups and generate emargement lists.',
            contact: {
                name: 'Nathan BOSCHI',
                email: 'nathan.boschi@edu.univ-fcomte.fr'
            },
        },
        servers: [
            {
                url: 'http://localhost:3000/api'
            },
        ],
    },
    apis: ['./index.js', './models/*.js', './routers/*.router.js']
}

module.exports = swaggerJsDoc(swaggerOptions);