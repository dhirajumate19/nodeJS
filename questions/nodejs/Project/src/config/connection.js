import mongoose from "mongoose";
import { DBurl } from "./config.js";

export const connectionDB = () => {
  mongoose
    .connect(`${DBurl}/E-commerce-app`)
    .then(() => console.log("DB Connected!"));
};
