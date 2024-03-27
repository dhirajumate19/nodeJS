const routes = async (fastify, options) => {
    fastify.get('/', async (request, reply) => {
      reply.send( { hello: 'world' });
    });
};
export default routes;