const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Horoscope API',
        version: '1.0.0',
        description: 'Horo Middleware API Description',
    },
    servers: [
        {
          url: "http://localhost:3000/",
          description: "Local server"
        },
        {
          url: "https://horospace.co.ke/",
          description: "Live server"
        },
      ]
};

const options = {
    swaggerDefinition,
    apis: ['./routes/*.js'], // Path to the API routes in your Node.js application
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;