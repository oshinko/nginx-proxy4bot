FROM node:12.12.0-alpine

WORKDIR /var/www/nginx-proxy4bot/bot-server

COPY package*.json ./

RUN yarn install

COPY . .

CMD node serve.js
