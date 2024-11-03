import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const speakerSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: String,
    company_name: String,
    email: String,
    job_title: String,
    profile_pic: String,
    type: String,
}, {
    timestamps: true
});

const Speaker = mongoose.models.Speaker || mongoose.model('Speaker', speakerSchema);
export default Speaker;