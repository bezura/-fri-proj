import Fastify from 'fastify';
import env from '@fastify/env';
import cors from '@fastify/cors';
import formbody from '@fastify/formbody';
import { envOptions } from './env.js';
import { registerRoutes } from './routes/register.js';
import { verifyRoutes } from './routes/verify.js';

const fastify = Fastify({ logger: true });

await fastify.register(env, envOptions);
await fastify.register(cors);
await fastify.register(formbody);

await registerRoutes(fastify);
await verifyRoutes(fastify);

fastify.listen({ port: Number(fastify.config.PORT) }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
