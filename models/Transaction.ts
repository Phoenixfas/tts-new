import mongoose from 'mongoose';

const TransactionSchema = new mongoose.Schema({
  txnId: {
    type: String,
    required: true,
    unique: true,
  },
  created_at: {
    type: Date,
    required: true,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    required: true,
    default: Date.now,
  },
  thirdPartyId: {
    type: String,
    required: true,
  },
  merId: {
    type: String,
    required: true,
  },
  merName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  reason: {
    type: String,
  },
  msisdn: {
    type: String,
    default: "",
  },
  accountNumber: {
    type: String,
    default: "",
  },
  paymentVia: {
    type: String,
    required: true,
  },
  refId: {
    type: String,
    required: true,
    unique: true,
  },
  successRedirectUrl: {
    type: String,
    required: true,
  },
  failureRedirectUrl: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    // enum: ["COMPLETED", "FAILED", "PENDING"], // Add other statuses as needed
  },
  receiverWalletID: {
    type: String,
    default: "",
  },
});


const Transaction = mongoose.models.Transaction || mongoose.model('Transaction', TransactionSchema);
export default Transaction;