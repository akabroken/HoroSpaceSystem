const express = require('express');
const swaggerUI = require('swagger-ui-express');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todoRoutes');
const errorMiddleware = require('./errorHandling/errorMiddleware');
const swaggerSpec = require('./configuration/swagger');

require('dotenv').config();

const app = express();

// Middleware
app.use(bodyParser.json());


app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
const PORT = process.env.PORT || 3000;



/** HTTP GET Request */
app.get('/', (req, res) => {
    res.status(201).json("Home GET Request");
});

// Routes
app.use('/todos', todoRoutes);

// Error middleware
app.use(errorMiddleware);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});