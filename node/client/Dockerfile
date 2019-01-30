FROM node:8.15.0-alpine

WORKDIR /usr/src/app

COPY package.json /usr/src/app/

RUN npm install --quiet --prefix /usr/src/app/

COPY . /usr/src/app/
