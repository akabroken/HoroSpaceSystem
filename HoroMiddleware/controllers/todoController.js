const Todo = require('../model/todo');
const moment = require('moment');

const currentDateTime = moment().format('YYYY-MM-DD HH:mm:ss');

exports.getAllTodos = function (req, res) {
    Todo.getAllTodos((err, todos) => {
        if (err) throw err;
        res.json(todos);
    });
};

exports.getTodoById = function (req, res) {
    Todo.getTodoById(req.params.id, (err, todo) => {
        if (err) throw err;
        res.json(todo);
    });
};

exports.createTodo = function (req, res) {
    const newTodo = {
        name: req.body.name,
        status: req.body.status,
        date_posted: currentDateTime,
        //completed: req.body.completed
    };

    Todo.createTodo(newTodo, (err, result) => {
        if (err) throw err;
        res.json({ message: 'Todo created successfully' });
    });
};

exports.updateTodo = function (req, res) {
    const updatedTodo = {
        name: req.body.name,
        status: req.body.status
    };

    Todo.updateTodo(req.params.id, updatedTodo, (err, result) => {
        if (err) throw err;
        res.json({ message: 'Todo updated successfully' });
    });
};

exports.deleteTodo = function (req, res) {
    Todo.deleteTodo(req.params.id, (err, result) => {
        if (err) throw err;
        res.json({ message: 'Todo deleted successfully' });
    });
};