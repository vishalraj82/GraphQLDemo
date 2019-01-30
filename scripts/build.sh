#! /bin/bash

# Build the Mongo db image
docker-compose build --no-cache mongo

# Build the graphql server image
docker-compose build --no-cache server

# Build the react client image
docker-compose build --no-cache client
