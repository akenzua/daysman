const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const titleSchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Title', titleSchema);
