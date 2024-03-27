const express = require("express");
const app = express();
const PORT = 4000;

//mid Level experince code

// To enable request.body-> Middleware
app.use(express.json());
//app.use(express.urlencoded({ extended: true }));

let todos = [];

app.post("/todos", (req, res) => {
  console.log("Body: ", req.body);
  const { title } = req.body;
  if (!title) {
    return res.status(400).send({ message: "Please enter title first" });
  }
  res.send({ message: "Welcome to todos" });
});

app.get(
  "/dhiraj",
  (req, res, next) => {
    // Fail -> res.send (Send Response back to the caller)
    // Pass -> Okay, go to my next fn
  },
  (req, res) => {
    // After next, it will come here
  }
);
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});