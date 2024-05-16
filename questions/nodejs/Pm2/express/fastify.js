// Fastify
import Fastify from "fastify";
const fastify = Fastify();

// Declare a route
fastify.get("/", async function handler(request, reply) {
  return { message: "Welcome to Fastify Express" };
});

// Run the server!
try {
  await fastify.listen({ port: 4200 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
