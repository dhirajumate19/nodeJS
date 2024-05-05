import mongoose from "mongoose";

const transactionSchema = mongoose.Schema({
  orderId: { type: mongoose.Schema.Types.ObjectId, required: true },
  transactionId: { type: String, required: true },
  amount: { type: Number, required: true },
  currency: { type: String, required: true },
  paymentMethod: { type: String, required: true },
  status: {
    type: String,
    enum: ["pending", "processing", "shipped", "delivered"],
    default: "pending",
  },
});
export const transctionModel = mongoose.model("transction", transactionSchema);
