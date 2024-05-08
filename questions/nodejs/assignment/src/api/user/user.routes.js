import express from "express";
import { getUser } from "./user.controller.js";
const userRouter = express.Router();

userRouter.get("/user/:username", getUser);
export default userRouter;
