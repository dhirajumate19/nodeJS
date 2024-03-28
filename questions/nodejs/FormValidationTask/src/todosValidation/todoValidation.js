const express = require("express");
const { v4: uuidv4 } = require("uuid");
const router = express.Router();
let todos = [];
const createResponse = (data, message) => {
  return {
    data,
    meta: {
      message,
    },
  };
};
const validateData = (title, description) => {
  let error = [];
  if (!title || title.trim() === "") {
    error.push("Enter Title");
  }
  if (!description || description.trim() === "") {
    error.push("Enter descpriton");
  }
  //createResponse(null, error.length> 0 ?"Validation Failed":"Validation Successfull")
  return error ;
};

router.get("/todos", (req, res) => {
  try {
    const response = createResponse(
      { todos, todosTotalLength: todos.length },
      "Todos Data Retrive"
    );
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});
router.post("/todos", (req, res, next) => {
  const { title, description } = req.body;
  const timeStamp = new Date().toISOString();
  const validate = validateData(title, description);
  console.log(validate);
  if (validate.length > 0) {
    return res.status(400).json(validate);
  }
  const newTodo = { id: uuidv4(), title, description, timeStamp };
  todos.push(newTodo);
  const response = createResponse(newTodo, "Todo SuccessFully created");
  res.status(200).json(response);
});
module.exports = router;
