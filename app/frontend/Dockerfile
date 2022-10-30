FROM node:lts-alpine3.16

WORKDIR /app-frontend

COPY package* ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
