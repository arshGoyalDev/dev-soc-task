FROM node:22-alpine

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

ENV PORT=8080
ENV ORIGIN=http://localhost:3000

EXPOSE 8080

CMD ["npm", "start"]