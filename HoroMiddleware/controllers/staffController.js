const Staff = require('../model/staffs');
const moment = require('moment');

const currentDateTime = moment().format('YYYY-MM-DD HH:mm:ss');

exports.getAllStaffs = function (req, res) {
    Staff.getAllStaffs((err, staffs) => {
        if (err) throw err;
        res.json(staffs);
    });
};

exports.getStaffById = function (req, res) {
    Staff.getStaffById(req.params.id, (err, staff) => {
        if (err) throw err;
        res.json(staff);
    });
};

exports.createStaff = function (req, res) {
    const newStaff = {
        name: req.body.name,
        status: req.body.status,
        date_posted: currentDateTime,
        //completed: req.body.completed
    };

    Staff.createStaff(newStaff, (err, result) => {
        if (err) throw err;
        res.json({ message: 'Staff created successfully' });
    });
};

exports.updateStaff = function (req, res) {
    const updatedStaff = {
        name: req.body.name,
        status: req.body.status
    };

    Staff.updateStaff(req.params.id, updatedStaff, (err, result) => {
        if (err) throw err;
        res.json({ message: 'Staff updated successfully' });
    });
};

exports.deleteStaff = function (req, res) {
    Staff.deleteStaff(req.params.id, (err, result) => {
        if (err) throw err;
        res.json({ message: 'Staff deleted successfully' });
    });
};