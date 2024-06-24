const Audit = require('../model/audit');
const moment = require('moment');

const currentDateTime = moment().format('YYYY-MM-DD HH:mm:ss');

exports.getAllAudits = function (req, res) {
    Audit.getAllAudits((err, audits) => {
        if (err) throw err;
        res.json(audits);
    });
};

exports.getAuditById = function (req, res) {
    Audit.getAuditById(req.params.id, (err, Audit) => {
        if (err) throw err;
        res.json(Audit);
    });
};

exports.createAudit = function (req, res) {
    const newAudit = {
        name: req.body.name,
        status: req.body.status,
        date_posted: currentDateTime,
        //completed: req.body.completed
    };

    Audit.createAudit(newAudit, (err, result) => {
        if (err) throw err;
        res.json({ message: 'Audit created successfully' });
    });
};

exports.updateAudit = function (req, res) {
    const updatedAudit = {
        name: req.body.name,
        status: req.body.status
    };

    Audit.updateAudit(req.params.id, updatedAudit, (err, result) => {
        if (err) throw err;
        res.json({ message: 'Audit updated successfully' });
    });
};

exports.deleteAudit = function (req, res) {
    Audit.deleteAudit(req.params.id, (err, result) => {
        if (err) throw err;
        res.json({ message: 'Audit deleted successfully' });
    });
};