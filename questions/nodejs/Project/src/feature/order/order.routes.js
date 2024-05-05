import express from "express";
import { createOrder } from "./order.controller.js";
const orderRouter = express.Router();

orderRouter.post("/order", createOrder);
export default orderRouter;
