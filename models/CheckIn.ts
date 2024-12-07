import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const checkInSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
    },
    checkInTime: {
        type: Date,
        default: Date.now(),
    }
}, {
    timestamps: true
});

const CheckIn = mongoose.models.CheckIn || mongoose.model('CheckIn', checkInSchema);
export default CheckIn;