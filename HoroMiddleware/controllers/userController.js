const User = require('../model/users');
const moment = require('moment');

const currentDateTime = moment().format('YYYY-MM-DD HH:mm:ss');

exports.getAllUsers = function (req, res) {
    User.getAllUsers((err, users) => {
        if (err) throw err;
        res.json(users);
    });
};

exports.getUserById = function (req, res) {
    User.getUserById(req.params.id, (err, user) => {
        if (err) throw err;
        res.json(user);
    });
};

exports.createUser = function (req, res) {
    const newUser = {
        name: req.body.name,
        status: req.body.status,
        date_posted: currentDateTime,
        //completed: req.body.completed
    };

    User.createUser(newUser, (err, result) => {
        if (err) throw err;
        res.json({ message: 'User created successfully' });
    });
};

exports.updateUser = function (req, res) {
    const updatedUser = {
        name: req.body.name,
        status: req.body.status
    };

    User.updateUser(req.params.id, updatedUser, (err, result) => {
        if (err) throw err;
        res.json({ message: 'User updated successfully' });
    });
};

exports.deleteUser = function (req, res) {
    User.deleteUser(req.params.id, (err, result) => {
        if (err) throw err;
        res.json({ message: 'User deleted successfully' });
    });
};