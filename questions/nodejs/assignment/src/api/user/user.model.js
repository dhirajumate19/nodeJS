import mongoose from "mongoose";

const userSchema = mongoose.Schema([
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    data: { type: Object, required: true },
  },
]);
export const userModel = mongoose.model("user", userSchema);
