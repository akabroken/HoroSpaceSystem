const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');
const { exampleResponse } = require('../configuration/swaggerDefinitions');

// Routes

router.get('/', function (req, res) {
    try {
        // You can add your logic here if needed
    } catch (error) {
        console.error('Error fetching menu items:', error);
        res.status(500).send('Internal Server Error');
    }
});

/**
 * @swagger
 * /todos/resource:
 *   get:
 *     tags:
 *       - Todo Controller
 *     summary: Retrieve a list of todos
 *     description: Retrieve a list of todos from the API
 *     responses:
 *       200:
 *         description: A list of todos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   status:
 *                     type: string
 *                   date_posted:
 *                     type: string
 */
router.get('/resource', todoController.getAllTodos);

/**
 * @swagger
 * /todos/resource/{id}:
 *   get:
 *     tags:
 *       - Todo Controller
 *     summary: Retrieve a single todo by ID
 *     description: Retrieve a single todo from the API by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The todo ID
 *     responses:
 *       200:
 *         description: A single todo
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 status:
 *                   type: string
 *                 date_posted:
 *                   type: string
 */
router.get('/resource/:id', todoController.getTodoById);

/**
 * @swagger
 * /todos/resource/create:
 *   post:
 *     tags:
 *       - Todo Controller
 *     summary: Create a new todo
 *     description: Create a new todo in the API
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - status
 *             properties:
 *               name:
 *                 type: string
 *               status:
 *                 type: string
 *                 default: new
 *     responses:
 *       201:
 *         description: Todo created successfully
 *       409:
 *         description: Conflict
 *       404:
 *         description: Not Found
 *       500:
 *         description: Server Error
 */
router.post('/resource/create', todoController.createTodo);

/**
 * @swagger
 * /todos/resource/{id}:
 *   put:
 *     tags:
 *       - Todo Controller
 *     summary: Update an existing todo by ID
 *     description: Update an existing todo in the API by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The todo ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               status:
 *                 type: string
 *     responses:
 *       200:
 *         description: Todo updated successfully
 *       409:
 *         description: Conflict
 *       404:
 *         description: Not Found
 *       500:
 *         description: Server Error
 */
router.put('/resource/:id', todoController.updateTodo);

/**
 * @swagger
 * /todos/resource/{id}:
 *   delete:
 *     tags:
 *       - Todo Controller
 *     summary: Delete a todo by ID
 *     description: Delete a todo from the API by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The todo ID
 *     responses:
 *       204:
 *         description: Todo deleted successfully
 */
router.delete('/resource/:id', todoController.deleteTodo);

/**
 * @swagger
 * /todos/test:
 *   get:
 *     tags:
 *       - Todo Controller
 *     summary: Retrieve an test
 *     description: Retrieve an example from the API
 *     responses:
 *       200:
 *         description: Successfully retrieved example
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
router.get('/example', (req, res) => {
    res.json({ message: 'Middleware is OK' });
});

module.exports = router;
