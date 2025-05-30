import bcrypt from 'bcrypt';
import { prisma } from '../prisma.js';

export async function loginRoutes(fastify) {
  fastify.post('/login', {
    schema: {
      body: {
        type: 'object',
        required: ['email', 'password'],
        properties: {
          email: { type: 'string', format: 'email' },
          password: { type: 'string', minLength: 6 }
        }
      }
    },
    handler: async (request, reply) => {
      const { email, password } = request.body;
      const user = await prisma.user.findUnique({ where: { email } });
      if (!user) {
        return reply.code(400).send({ error: 'User not found' });
      }
      if (!user.verified) {
        return reply.code(400).send({ error: 'Email not verified' });
      }
      const valid = await bcrypt.compare(password, user.password);
      if (!valid) {
        return reply.code(400).send({ error: 'Invalid password' });
      }
      // Здесь можно добавить генерацию JWT и возвращать его
      return reply.send({ success: true, userId: user.id });
    }
  });
} 