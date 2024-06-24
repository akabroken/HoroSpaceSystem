const Permission = require('../model/permissions');
const moment = require('moment');

const currentDateTime = moment().format('YYYY-MM-DD HH:mm:ss');

exports.getAllPermissions = function (req, res) {
    Permission.getAllPermissions((err, permissions) => {
        if (err) throw err;
        res.json(permissions);
    });
};

exports.getPermissionById = function (req, res) {
    Permission.getPermissionById(req.params.id, (err, permission) => {
        if (err) throw err;
        res.json(permission);
    });
};

exports.createPermission = function (req, res) {
    const newPermission = {
        name: req.body.name,
        status: req.body.status,
        date_posted: currentDateTime,
        //completed: req.body.completed
    };

    Permission.createPermission(newPermission, (err, result) => {
        if (err) throw err;
        res.json({ message: 'Permission created successfully' });
    });
};

exports.updatePermission = function (req, res) {
    const updatedPermission = {
        name: req.body.name,
        status: req.body.status
    };

    Permission.updatePermission(req.params.id, updatedPermission, (err, result) => {
        if (err) throw err;
        res.json({ message: 'Permission updated successfully' });
    });
};

exports.deletePermission = function (req, res) {
    Permission.deletePermission(req.params.id, (err, result) => {
        if (err) throw err;
        res.json({ message: 'Permission deleted successfully' });
    });
};