#! /bin/bash

# Delete the network
docker network rm graphqldemo_graphqlnet

# Delete the containers
docker container ls -a | grep graphqldemo | awk '{ print $1 }' | xargs docker container rm -f

# Delete the volumes
docker volume rm graphqldemo_client_node_modules graphqldemo_server_node_modules

# Delete the final images
docker image ls -a | grep "node-" | awk '{ print $3 }' | xargs docker image rm

# Delete the mongo db folder
sudo rm -rf ./mongo/db/*
