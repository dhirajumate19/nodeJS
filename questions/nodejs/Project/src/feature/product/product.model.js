import mongoose from "mongoose";
const productSchema = mongoose.Schema([
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    },
    category: {
      type: String,
    },
    // Other product-related fields
  },
]);

export const productModel = mongoose.model("products", productSchema);
