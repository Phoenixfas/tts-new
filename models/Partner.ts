const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const partnerSchema = new Schema({
    name: String,
    logo: String,
    url: String,
    description: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Partner', partnerSchema);