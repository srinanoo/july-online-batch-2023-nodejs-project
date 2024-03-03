const mongoose = require('mongoose');
require('dotenv').config();

function dbconnection() {
    try {
        mongoose.connect(process.env.DB_URL);
        console.log("Connected to MongoDB successfully!!!");
    } catch (err) {
        console.log(err.message);
    }
}

module.exports = { dbconnection };