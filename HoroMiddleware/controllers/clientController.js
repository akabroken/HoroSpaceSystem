const Client = require('../model/clients');
const moment = require('moment');

const currentDateTime = moment().format('YYYY-MM-DD HH:mm:ss');

exports.getAllClients = function (req, res) {
    Client.getAllClients((err, clients) => {
        if (err) throw err;
        res.json(clients);
    });
};

exports.getClientById = function (req, res) {
    Client.getClientById(req.params.id, (err, client) => {
        if (err) throw err;
        res.json(client);
    });
};

exports.createClient = function (req, res) {
    const newClient = {
        name: req.body.name,
        status: req.body.status,
        date_posted: currentDateTime,
        //completed: req.body.completed
    };

    Client.createClient(newClient, (err, result) => {
        if (err) throw err;
        res.json({ message: 'Client created successfully' });
    });
};

exports.updateClient = function (req, res) {
    const updatedClient = {
        name: req.body.name,
        status: req.body.status
    };

    Client.updateClient(req.params.id, updatedClient, (err, result) => {
        if (err) throw err;
        res.json({ message: 'Client updated successfully' });
    });
};

exports.deleteClient = function (req, res) {
    Client.deleteClient(req.params.id, (err, result) => {
        if (err) throw err;
        res.json({ message: 'Client deleted successfully' });
    });
};