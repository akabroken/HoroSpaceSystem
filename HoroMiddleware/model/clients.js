//const db = require('../configuration/database');

const db = require('../configuration/database');


exports.getAllClients = function (callback) {
    db.query('SELECT * FROM tbl_clients', callback);
};

exports.getClientById = function (id, callback) {
    db.query('SELECT * FROM tbl_clients WHERE id = ?', [id], callback);
};

exports.createClient = function (newClient, callback) {
    db.query('INSERT INTO tbl_clients SET ?', newClient, callback);
};

exports.updateClient = function (id, updatedClient, callback) {
    db.query('UPDATE tbl_clients SET ? WHERE id = ?', [updatedClient, id], callback);
};

exports.deleteClient = function (id, callback) {
    db.query('DELETE FROM tbl_clients WHERE id = ?', [id], callback);
};