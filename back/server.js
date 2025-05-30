import Fastify from 'fastify';
import env from '@fastify/env';
import cors from '@fastify/cors';
import formbody from '@fastify/formbody';
import { envOptions } from './env.js';
import { registerRoutes } from './routes/register.js';
import { verifyRoutes } from './routes/verify.js';
import { loginRoutes } from './routes/login.js';
import { forgotPasswordRoutes } from './routes/forgotPassword.js';
import { resetPasswordRoutes } from './routes/resetPassword.js';
import bgRoutes from './routes/bg.js';
import { registerAnalyticsRoutes } from './routes/analytics.js';

const fastify = Fastify({ logger: true });

await fastify.register(env, envOptions);
await fastify.register(cors);
await fastify.register(formbody);

await registerRoutes(fastify);
await verifyRoutes(fastify);
await loginRoutes(fastify);
await forgotPasswordRoutes(fastify);
await resetPasswordRoutes(fastify);
await bgRoutes(fastify);
await registerAnalyticsRoutes(fastify);

fastify.listen({ port: Number(fastify.config.PORT), host: '0.0.0.0'  }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
