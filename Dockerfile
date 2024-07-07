FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build --prod

RUN npm install -g http-server

CMD ["http-server", "dist/cat-app-frontend"]