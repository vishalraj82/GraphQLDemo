FROM node:8.15.0-alpine

ARG INSTALL_DIR

RUN mkdir -p $INSTALL_DIR

WORKDIR $INSTALL_DIR

COPY package.json $INSTALL_DIR/

RUN npm install --quiet --prefix $INSTALL_DIR

COPY . $INSTALL_DIR
