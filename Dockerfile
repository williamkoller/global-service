FROM node:12.20-alpine3.12

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 3000 

CMD [ "npm", "run","start:dev" ]