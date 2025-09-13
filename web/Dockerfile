FROM node:22-alpine

WORKDIR /build

COPY package*.json .

RUN npm install

COPY . .

ENV VITE_SERVER_URL=http://localhost:8080

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "preview"]