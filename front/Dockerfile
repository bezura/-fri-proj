FROM node:23-alpine AS builder

WORKDIR /app
COPY . .

RUN corepack enable && corepack prepare pnpm@latest --activate
RUN pnpm install --force

ARG VITE_BACKEND_URL
ENV VITE_BACKEND_URL=$VITE_BACKEND_URL


RUN pnpm run build
