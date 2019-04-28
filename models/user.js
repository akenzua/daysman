const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdResumes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Resume'
        }
    ]
});

module.exports = mongoose.model('User', userSchema);
