const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
    },
    image: {
        type: String,
    },
});

const exhibitorSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    company_name: {
        type: String,
        required: true
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
    country: String,
    region: String,
    phone: String,
    title: String,
    space_only: String,
    shell_scheme: String,
    product_category: String,
    
    logo: {
        type: String,
    },
    description: {
        type: String,
    },
    sectors: [String],
    vendor_loc: String,
    products: [productSchema],
    videos: [String],
    approved: {
        type: Boolean,
        default: false
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Exhibitor', exhibitorSchema);