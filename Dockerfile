FROM node:14.8-alpine

WORKDIR /app

COPY ./package.json ./package.json
COPY ./yarn.lock ./yarn.lock

RUN yarn install

COPY . ./

CMD ["yarn", "start"]
