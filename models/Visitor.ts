import mongoose from 'mongoose';
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
    passType: {
        type: String,
        default: 'free'
    },
    paymentStatus: {
        type: String,
        default: 'pending'
    },
    paymentDetails: {
        type: Object,
    }
}, {
    timestamps: true
});

const Visitor = mongoose.models.Visitor || mongoose.model('Visitor', visitorSchema);
export default Visitor;