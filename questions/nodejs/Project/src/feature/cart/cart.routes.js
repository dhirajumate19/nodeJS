import express, { Router } from "express";
import { createCart } from "./cart.controller.js";
const cartRouter = express.Router();
cartRouter.post("/addcart", createCart);
export default cartRouter;
