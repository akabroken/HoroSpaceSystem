//const db = require('../configuration/database');

const db = require('../configuration/database');


exports.getAllUsers = function (callback) {
    db.query('SELECT * FROM tbl_users', callback);
};

exports.getUserById = function (id, callback) {
    db.query('SELECT * FROM tbl_users WHERE id = ?', [id], callback);
};

exports.createUser = function (newUser, callback) {
    db.query('INSERT INTO tbl_users SET ?', newUser, callback);
};

exports.updateUser = function (id, updatedUser, callback) {
    db.query('UPDATE tbl_users SET ? WHERE id = ?', [updatedUser, id], callback);
};

exports.deleteUser = function (id, callback) {
    db.query('DELETE FROM tbl_users WHERE id = ?', [id], callback);
};