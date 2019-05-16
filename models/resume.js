const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const interestSchema = new Schema({
    skill: {
        type: Schema.Types.ObjectId,
        ref: 'Skill'
    }
});

const educationSchema = new Schema({
    institution: {
        type: Schema.Types.ObjectId,
        ref: 'Institution'
    },
    faculty: {
        type: Schema.Types.ObjectId,
        ref: 'Faculty'
    },
    course: {
        type: Schema.Types.ObjectId,
        ref: 'Course'
    },
    qualification: {
        type: Schema.Types.ObjectId,
        ref: 'Qualification'
    },
    level: {
        type: Schema.Types.ObjectId,
        ref: 'Level'
    }   
});

const certificationSchema = new Schema({
    title: {
        type: Schema.Types.ObjectId,
        ref: 'Title'
    },
    issuer: {
        type: Schema.Types.ObjectId,
        ref: 'Issuer'
    },
    start: {
        type: String,
        required: true
    },

    expires: {
        type: Boolean,
        required: true
    },
    expiry: {
        type: String,
        required: true
    },  
    description: {
        type: String,
        required: true
    }
});

const phoneSchema = new Schema({
    number: {
        type: String,
        required: true
    },
});

const socialSchema = new Schema({
    site: {
        type: String,
        required: true
    },
    account: {
        type: String,
        required: true
    }
});

const jobSchema = new Schema({
    description: {
        type: String,
        required: true
    },
});


const AddressSchema = new Schema({
    house: {
        type: String,
        required: false
    },
    street: {
        type: String,
        required: false
    },
    town: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: false
    },
    country: {
        type: String,
        required: false
    }
});

const experienceSchema = new Schema({
    position: {
        type: String,
        required: true
    },
    organisation: {
        type: String,
        required: true
    },
    start: {
        type: String,
        required: true
    },
    end: {
        type: String,
        required: true
    },
    job: [jobSchema]
});

const awardsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    issuer: {
        type: String,
        required: true
    },
    start: {
        type: String,
        required: true
    },
    expires: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const resumeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    address: [AddressSchema],
    phone: [phoneSchema],
    socials: [socialSchema],
    education: [educationSchema],
    experience: [experienceSchema],
    awards: [awardsSchema],
    certification: [certificationSchema],
    interest: [interestSchema],
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Resume', resumeSchema);