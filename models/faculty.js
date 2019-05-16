const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const facultySchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Faculty', facultySchema);
