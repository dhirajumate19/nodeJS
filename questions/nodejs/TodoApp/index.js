//import Fastify from "fastify";
const Fastify = require("fastify");
const fastify = Fastify({
  logger: true,
});
const PORT = 3000;
//empty Array
let todos = [];
let idCounter = 1;

// Declare a route
//landing page
fastify.get("/", async (request, reply) => {
  return "Welcome to ToDo App";
});
//get All Todo
fastify.get("/todos", async (request, reply) => {
  return { todos };
});
//todo with id
fastify.get("/todos/:id", async (request, reply) => {
  const id  = request.params.id;
  console.log("id found", typeof id);
  const todo = todos.find((todo) => todo.id === parseInt(id));
  console.log("id found", typeof todo);
  if (!todo) {
    reply.code(404).send({ message: "Id not found" });
  }
  return { todo };
});

//add todo

fastify.post("/todos", async (request, reply) => {
  const { title, description } = request.body;
  const id = idCounter++;
  const newTodo = { id: id, title, description };
  todos.push(newTodo);
  return { todo: newTodo };
});

//Delete todo by using id

fastify.delete("/todos/:id",async(request, reply)=>{
  const id=request.params.id
  const index=todos.findIndex(todo=> todo.id!==id)
  if (index===-1) {
    reply.send({message:"Id nor found"})
    return
  }
  todos.splice(index,1)
  return {message:"Todo delete successfully"}

});

// Run the server!
(async () => {
  try {
    await fastify.listen({ port: PORT });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
})();
