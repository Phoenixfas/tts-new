const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    snippet: {
        type: String,
    },
    markdown: {
        type: String,
        required: true
    },
    sanitizedHtml: {
        type: String,
        required: true
    },
    date: {
        type: Date,
    }
});

module.exports = mongoose.model('New', newSchema);
