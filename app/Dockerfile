FROM node:14.8-alpine

RUN apk add --update --no-cache bash

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

ENV PORT=80
EXPOSE $PORT

CMD ["yarn", "start"]
