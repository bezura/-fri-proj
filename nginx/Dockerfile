FROM node:20-alpine AS builder

WORKDIR /app
COPY front .
RUN find /usr/share/nginx/html -type f -exec chmod 644 {} \;
RUN corepack enable && corepack prepare pnpm@latest --activate
ARG VITE_BACKEND_URL
ENV VITE_BACKEND_URL=$VITE_BACKEND_URL
RUN pnpm install  --force
RUN pnpm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/nginx.conf
