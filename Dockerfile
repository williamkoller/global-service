FROM node:12.20-alpine3.12

WORKDIR /app

COPY ${PWD}/package*.json ./

RUN yarn

RUN yarn cache clean 

RUN yarn global add @nestjs/cli

COPY . .

CMD [ "npm", "run","start:dev" ]