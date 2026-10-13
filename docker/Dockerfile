# --- Build ---
FROM node:24-alpine AS build

WORKDIR /projet

COPY portfolio/package*.json ./

RUN npm ci

COPY portfolio/ .

ARG BASE_URL=/

ENV BASE_URL=$BASE_URL

RUN npm run build

# --- Serveur ---
FROM nginxinc/nginx-unprivileged:alpine

COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /projet/dist /usr/share/nginx/html

EXPOSE 8080
