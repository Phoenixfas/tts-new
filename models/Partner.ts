import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const partnerSchema = new Schema({
    name: String,
    logo: String,
    url: String,
    description: String,
}, {
    timestamps: true
});

const Partner = mongoose.models.Partner || mongoose.model('Partner', partnerSchema);
export default Partner;