import mongoose from 'mongoose';

const TransactionSchema = new mongoose.Schema({
  txnId: { type: String, required: true },
  created_at: { type: Date, required: true },
  updated_at: { type: Date, required: true },
  thirdPartyId: { type: String },
  transactionType: { type: String, default: "" },
  merId: { type: String, required: true },
  merName: { type: String, required: true },
  address: { type: String },
  amount: { type: String, required: true },
  commission: { type: String },
  totalAmount: { type: String, required: true },
  currency: { type: String, required: true },
  reason: { type: String },
  msisdn: { type: String },
  accountNumber: { type: String, default: "" },
  clientReference: { type: String, default: "" },
  paymentVia: { type: String },
  refId: { type: String, required: true },
  successRedirectUrl: { type: String },
  failureRedirectUrl: { type: String },
  cancelRedirectUrl: { type: String },
  commissionAmountInPercent: { type: Number, default: 0 },
  providerCommissionAmountInPercent: { type: Number, default: 0 },
  commissionFromCustomer: { type: Boolean, default: false },
  vatAmountInPercent: { type: String },
  lotteryTax: { type: String, default: "0" },
  message: { type: String },
  updateType: { type: String, default: "" },
  Status: { type: String, required: true },
  StatusReason: { type: String, default: "" },
  ReceiverWalletID: { type: String, default: "" },
});


const Transaction = mongoose.models.Transaction || mongoose.model('Transaction', TransactionSchema);
export default Transaction;