import express from "express";
import {
  createTransction,
  getTransctionDeatils,
} from "./transction.controller.js";

const transctRouter = express.Router();

transctRouter.post("/transction", createTransction);
transctRouter.get("/transction/:id", getTransctionDeatils);
export default transctRouter;
