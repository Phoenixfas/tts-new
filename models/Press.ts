const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pressSchema = new Schema({
    title: {
        type: String,
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

module.exports = mongoose.model('Press', pressSchema);
