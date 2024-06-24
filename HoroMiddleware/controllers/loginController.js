const Login = require('../model/login');
const moment = require('moment');

const currentDateTime = moment().format('YYYY-MM-DD HH:mm:ss');

exports.getAllLogins = function (req, res) {
    Login.getAllLogins((err, logins) => {
        if (err) throw err;
        res.json(logins);
    });
};

exports.getLoginById = function (req, res) {
    Login.getLoginById(req.params.id, (err, login) => {
        if (err) throw err;
        res.json(login);
    });
};

exports.createLogin = function (req, res) {
    const newLogin = {
        name: req.body.name,
        status: req.body.status,
        date_posted: currentDateTime,
        //completed: req.body.completed
    };

    Login.createLogin(newLogin, (err, result) => {
        if (err) throw err;
        res.json({ message: 'Login created successfully' });
    });
};

exports.updateLogin = function (req, res) {
    const updatedLogin = {
        name: req.body.name,
        status: req.body.status
    };

    Login.updateLogin(req.params.id, updatedLogin, (err, result) => {
        if (err) throw err;
        res.json({ message: 'Login updated successfully' });
    });
};

exports.deleteLogin = function (req, res) {
    Login.deleteLogin(req.params.id, (err, result) => {
        if (err) throw err;
        res.json({ message: 'Login deleted successfully' });
    });
};