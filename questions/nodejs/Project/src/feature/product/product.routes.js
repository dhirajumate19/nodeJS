import express from "express";
import { addProducts, getProductCategoryWise } from "./product.controller.js";
const productRouter = express.Router();

productRouter.post("/addproduct", addProducts);
productRouter.get("/getproduct/:category", getProductCategoryWise);

export default productRouter;
