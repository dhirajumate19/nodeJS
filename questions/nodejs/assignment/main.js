import express from "express";
import { connectionDB } from "./src/config/connectionDB.js";
import { port } from "./src/config/config.js";
import userRouter from "./src/api/user/user.routes.js";
import repoRouter from "./src/api/repo/repo.routes.js";
const app = express();

app.use(express.json());

//connect server to mongo DB
connectionDB();

//accessing routes for user and repo
app.use("/api", userRouter);
app.use("/api", repoRouter);

app.listen(port, () => {
  console.log(`Surver running :: http://localhost:${port}`);
});
