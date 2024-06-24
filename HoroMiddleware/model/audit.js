//const db = require('../configuration/database');

const db = require('../configuration/database');


exports.getAllAudits = function (callback) {
    db.query('SELECT * FROM audit_log', callback);
};

exports.getAuditById = function (id, callback) {
    db.query('SELECT * FROM audit_log WHERE id = ?', [id], callback);
};

exports.createAudit = function (newAudit, callback) {
    db.query('INSERT INTO audit_log SET ?', newAudit, callback);
};

exports.updateAudit = function (id, updatedAudit, callback) {
    db.query('UPDATE audit_log SET ? WHERE id = ?', [updatedAudit, id], callback);
};

exports.deleteAudit = function (id, callback) {
    db.query('DELETE FROM audit_log WHERE id = ?', [id], callback);
};