FROM node:20.16.0-alpine3.20

RUN mkdir -p /opt/app

WORKDIR /opt/app

COPY package.json package-lock.json ./
RUN npm install
COPY app.js ./
COPY utils/ ./utils

EXPOSE 3000

CMD [ "node","app.js" ]