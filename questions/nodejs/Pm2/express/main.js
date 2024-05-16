import express from "express";
const app = express();
const PORT = 4200;

app.get("/", (req, res) => {
  res.send({ message: "Welcome to NodeJS Express" });
});

app.listen(PORT, () =>
  console.log(`The app is running on express at http://localhost:${PORT} `)
);
