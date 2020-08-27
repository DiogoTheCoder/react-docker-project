FROM node:14.8-alpine

RUN apk add --update --no-cache bash

WORKDIR /app

COPY . ./

RUN yarn install

EXPOSE 80

CMD ["yarn", "start"]
