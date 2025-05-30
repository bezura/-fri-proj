import { v4 as uuidv4 } from 'uuid';
import { createMailer } from '../mailer.js';
import { prisma } from '../prisma.js';

export async function forgotPasswordRoutes(fastify) {
  const mailer = createMailer(fastify.config);

  fastify.post('/forgot-password', {
    schema: {
      body: {
        type: 'object',
        required: ['email'],
        properties: {
          email: { type: 'string', format: 'email' }
        }
      }
    },
    handler: async (request, reply) => {
      const { email } = request.body;
      const user = await prisma.user.findUnique({ where: { email } });
      if (!user) {
        // Не раскрываем, что пользователя нет
        return reply.send({ success: true });
      }
      const resetToken = uuidv4();
      await prisma.user.update({
        where: { email },
        data: { resetToken }
      });
      await mailer.sendResetPasswordEmail(email, resetToken);
      return reply.send({ success: true });
    }
  });
} 