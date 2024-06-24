//const db = require('../configuration/database');

const db = require('../configuration/database');


exports.getAllUserLogins = function (callback) {
    db.query('SELECT * FROM tbl_user_logins', callback);
};

exports.getUserLoginById = function (id, callback) {
    db.query('SELECT * FROM tbl_user_logins WHERE id = ?', [id], callback);
};

exports.createUserLogin = function (newUserLogin, callback) {
    db.query('INSERT INTO tbl_user_logins SET ?', newUserLogin, callback);
};

exports.updateUserLogin = function (id, updatedUserLogin, callback) {
    db.query('UPDATE tbl_user_logins SET ? WHERE id = ?', [updatedUserLogin, id], callback);
};

exports.deleteUserLogin = function (id, callback) {
    db.query('DELETE FROM tbl_user_logins WHERE id = ?', [id], callback);
};