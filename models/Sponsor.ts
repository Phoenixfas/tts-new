const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sponsorSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required:true
    },
    company_name: {
        type: String,
        required: true
    },
    company_website: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    job_title: {
        type: String,
        required: true
    },
    country: {
        type: String
    },
    region: {
        type: String
    },
    phone: {
        type: String
    },
    title: {
        type: String,
    },
    goal: {
        type: String,
    },
    product_category: {
        type: String,
    },

    
    logo: {
        type: String,
    },
    description: {
        type: String,
    },
    sectors: [String],
    videos: [String],
    approved: {
        type: Boolean,
        default: false
    },
    type: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Sponsor', sponsorSchema);