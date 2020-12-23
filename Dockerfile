FROM node:latest

COPY . /app

WORKDIR /app

ENTRYPOINT [ "npm", "run", "serve" ]