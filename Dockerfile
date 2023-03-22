FROM node:latest
WORKDIR /app
COPY package.json .
RUN yarn
EXPOSE 4000
COPY . .
