import mongoose from 'mongoose';
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

const Press = mongoose.models.Press || mongoose.model('Press', pressSchema);
export default Press;