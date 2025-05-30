FROM node:23-alpine

RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

COPY . .

RUN pnpm install --force
RUN pnpm dlx prisma generate

EXPOSE 3000

CMD pnpm dlx prisma migrate deploy && node server.js
