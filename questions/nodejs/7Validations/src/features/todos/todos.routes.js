const express=require("express")
const {handleGetTodos}=require("../todos/todos.controller")
const {validateQueryParam}=require("../todos/todos.validator")
const router=express.Router()

router.get("/",validateQueryParam,handleGetTodos)
module.exports=router