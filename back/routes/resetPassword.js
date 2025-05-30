import bcrypt from 'bcrypt';
import { prisma } from '../prisma.js';

export async function resetPasswordRoutes(fastify) {
  fastify.post('/reset-password', {
    schema: {
      body: {
        type: 'object',
        required: ['email', 'token', 'newPassword'],
        properties: {
          email: { type: 'string', format: 'email' },
          token: { type: 'string' },
          newPassword: { type: 'string', minLength: 6 }
        }
      }
    },
    handler: async (request, reply) => {
      const { email, token, newPassword } = request.body;
      const user = await prisma.user.findUnique({ where: { email } });
      if (!user || user.resetToken !== token) {
        return reply.code(400).send({ error: 'Invalid token' });
      }
      const hashed = await bcrypt.hash(newPassword, 10);
      await prisma.user.update({
        where: { email },
        data: { password: hashed, resetToken: null }
      });
      return reply.send({ success: true });
    }
  });
} 