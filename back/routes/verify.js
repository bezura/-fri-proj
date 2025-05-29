import { prisma } from '../prisma.js';

export async function verifyRoutes(fastify) {
  fastify.get('/verify', async (request, reply) => {
    const { email, token } = request.query;

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || user.token !== token) {
      return reply.code(400).send({ error: 'Invalid or expired token' });
    }

    await prisma.user.update({
      where: { email },
      data: { verified: true }
    });

    return reply.send({ success: true });
  });
}
