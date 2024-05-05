import express from "express";
import { createUserController } from "./user.controller.js";
const userRouter = express.Router();

userRouter.post("/create", createUserController);

export default userRouter;
