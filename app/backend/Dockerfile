FROM node:lts-alpine3.16

WORKDIR /app-backend

COPY package* ./

RUN npm install

COPY . .

EXPOSE 3001

RUN npx tsc

CMD ["npm", "start"]