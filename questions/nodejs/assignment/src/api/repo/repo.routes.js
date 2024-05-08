import express from "express";
import { getRepo } from "./repo.controller.js";
const repoRouter = express.Router();

repoRouter.get("/user/:username/repos", getRepo);

export default repoRouter;
