import express from "express";
import { addProducts } from "./product.controller.js";
const productRouter = express.Router();

productRouter.post("/addproduct", addProducts);

export default productRouter;
