//const db = require('../configuration/database');

const db = require('../configuration/database');


exports.getAllPermissions = function (callback) {
    db.query('SELECT * FROM tbl_permissions', callback);
};

exports.getPermissionById = function (id, callback) {
    db.query('SELECT * FROM tbl_permissions WHERE id = ?', [id], callback);
};

exports.createPermission = function (newPermission, callback) {
    db.query('INSERT INTO tbl_permissions SET ?', newPermission, callback);
};

exports.updatePermission = function (id, updatedPermission, callback) {
    db.query('UPDATE tbl_permissions SET ? WHERE id = ?', [updatedPermission, id], callback);
};

exports.deletePermission = function (id, callback) {
    db.query('DELETE FROM tbl_permissions WHERE id = ?', [id], callback);
};