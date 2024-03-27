const express=require("express")
const todosRouter=require("../7Validations/src/features/todos/todos.routes")
const app=express()
const PORT=3000
app.use(express.json())

// app.get("/",(req, rep)=>{
// rep.send("hello")
// })
app.use("/todos", todosRouter)

app.listen(PORT,()=>{
    console.log(`https:localhost:3000`);
})