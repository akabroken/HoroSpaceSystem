//const db = require('../configuration/database');

const db = require('../configuration/database');


exports.getAllStaffs = function (callback) {
    db.query('SELECT * FROM tbl_staffs', callback);
};

exports.getStaffById = function (id, callback) {
    db.query('SELECT * FROM tbl_staffs WHERE id = ?', [id], callback);
};

exports.createStaff = function (newStaff, callback) {
    db.query('INSERT INTO tbl_staffs SET ?', newStaff, callback);
};

exports.updateStaff = function (id, updatedStaff, callback) {
    db.query('UPDATE tbl_staffs SET ? WHERE id = ?', [updatedStaff, id], callback);
};

exports.deleteStaff = function (id, callback) {
    db.query('DELETE FROM tbl_staffs WHERE id = ?', [id], callback);
};