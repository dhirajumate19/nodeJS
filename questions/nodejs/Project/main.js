import express from "express";
import { port } from "./src/config/config.js";
import orderRouter from "./src/feature/order/order.routes.js";
import userRouter from "./src/feature/user/user.routes.js";
import { connectionDB } from "./src/config/connection.js";

import productRouter from "./src/feature/product/product.routes.js";
import transctRouter from "./src/feature/transction/transction.routes.js";
const app = express();

app.use(express.json());
connectionDB();
app.use("/api", orderRouter);
app.use("/api", userRouter);
app.use("/api", productRouter);
app.use("/api", transctRouter);

app.listen(port, () => {
  console.log(`the surver is runnign on  http://localhost:${port}`);
});
