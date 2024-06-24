//const db = require('../configuration/database');

const db = require('../configuration/database');


exports.getAllRoles = function (callback) {
    db.query('SELECT * FROM tbl_roles', callback);
};

exports.getRoleById = function (id, callback) {
    db.query('SELECT * FROM tbl_roles WHERE id = ?', [id], callback);
};

exports.createRole = function (newRole, callback) {
    db.query('INSERT INTO tbl_roles SET ?', newRole, callback);
};

exports.updateRole = function (id, updatedRole, callback) {
    db.query('UPDATE tbl_roles SET ? WHERE id = ?', [updatedRole, id], callback);
};

exports.deleteRole = function (id, callback) {
    db.query('DELETE FROM tbl_roles WHERE id = ?', [id], callback);
};