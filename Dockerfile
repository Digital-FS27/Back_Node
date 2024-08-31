FROM node:18-alpine3.19

RUN npm install -g npm@8.12.2

WORKDIR /usr/app

COPY package.json ./

COPY prisma ./prisma/

RUN npm install

COPY . .

EXPOSE 5000

CMD [ "npm", "run", "dev" ]