const express= require("express")
const todoValidation = require("../FormValidationTask/src/todosValidation/todoValidation")
const app= express();

app.use(express.json())

app.use("/",todoValidation)




app.listen(3000, ()=>{

})