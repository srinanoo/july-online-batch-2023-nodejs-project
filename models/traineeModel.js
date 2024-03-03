const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;
const conn = require('../db');
conn.dbconnection();

const TraineeSchema = new Schema({
    name: 'String',
    age: 'Number',
    active: Boolean,
});

const TraineeModel = mongoose.model('trainees', TraineeSchema);

module.exports = { TraineeModel };