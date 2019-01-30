#! /bin/bash

# Start the Mongo db server
docker-compose up mongo

# Start the graphql server
docker-compose up server

# Start the react client
docker-compose up client
