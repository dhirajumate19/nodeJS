import express from "express";
import { createOrder, getOrder } from "./order.controller.js";
const orderRouter = express.Router();

orderRouter.post("/order", createOrder);
orderRouter.get("/getorder/:orderid", getOrder);
export default orderRouter;
