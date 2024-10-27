const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const visitorSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
    },
    company_name: {
        type: String,
    },
    company_website: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    job_title: {
        type: String,
    },
    phone: {
        type: String
    },
    title: {
        type: String,
    },
    country: {
        type: String,
    },
    region: {
        type: String,
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Visitor', visitorSchema);