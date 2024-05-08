import mongoose from "mongoose";

const reposSchema = mongoose.Schema([
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    data: { type: Object, required: true },
  },
]);
export const reposModel = mongoose.model("repos", reposSchema);
