import mongoose from "mongoose";

const orderSchema = mongoose.Schema([
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    transctionId: { type: mongoose.Schema.Types.ObjectId, required: false },
    products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "product",
          required: true,
        },
        productName: {
          type: mongoose.Schema.Types.String,
          required: true,
        },
        productPrice: {
          type: mongoose.Schema.Types.Number,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    totalPrice: {
      type: Number,
      required: false,
    },
    status: {
      type: String,
      enum: ["pending", "processing", "shipped", "delivered"],
      default: "pending",
    },
  },
]);

export const orderModel = mongoose.model("order", orderSchema);
