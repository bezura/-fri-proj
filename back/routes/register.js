import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { createMailer } from '../mailer.js';
import { prisma } from '../prisma.js';

export async function registerRoutes(fastify) {
  const mailer = createMailer(fastify.config);

  fastify.post('/register', {
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

      const exists = await prisma.user.findUnique({ where: { email } });
      if (exists) {
        return reply.code(400).send({ error: 'Email already registered' });
      }

      const hashed = await bcrypt.hash(password, 10);
      const token = uuidv4();

      await prisma.user.create({
        data: {
          email,
          password: hashed,
          token,
        }
      });

      await mailer.sendVerificationEmail(email, token);
      return reply.send({ success: true });
    }
  });
}
