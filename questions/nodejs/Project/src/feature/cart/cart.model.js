import mongoose, { mongo } from "mongoose";
const opts = {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
};
const cartSchema = mongoose.Schema([
  {
    userId: { type: mongoose.Schema.Types.ObjectId, required: true },
    products: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
      },
    ],
  },
]);
export const cartModel = mongoose.model("cart", cartSchema);
