const Role = require('../model/roles');
const moment = require('moment');

const currentDateTime = moment().format('YYYY-MM-DD HH:mm:ss');

exports.getAllRoles = function (req, res) {
    Role.getAllRoles((err, roles) => {
        if (err) throw err;
        res.json(roles);
    });
};

exports.getRoleById = function (req, res) {
    Role.getRoleById(req.params.id, (err, role) => {
        if (err) throw err;
        res.json(role);
    });
};

exports.createRole = function (req, res) {
    const newRole = {
        name: req.body.name,
        status: req.body.status,
        date_posted: currentDateTime,
        //completed: req.body.completed
    };

    Role.createRole(newRole, (err, result) => {
        if (err) throw err;
        res.json({ message: 'Role created successfully' });
    });
};

exports.updateRole = function (req, res) {
    const updatedRole = {
        name: req.body.name,
        status: req.body.status
    };

    Role.updateRole(req.params.id, updatedRole, (err, result) => {
        if (err) throw err;
        res.json({ message: 'Role updated successfully' });
    });
};

exports.deleteRole = function (req, res) {
    Role.deleteRole(req.params.id, (err, result) => {
        if (err) throw err;
        res.json({ message: 'Role deleted successfully' });
    });
};