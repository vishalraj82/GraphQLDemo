This is a simple demonstration on how to use GraphQL to query and mutate data.

The following stack has been used

NodeJS
Express
create-react-app
mongo
mongo-express
docker

Docker has been used so this project can run on any machine which supports docker
Four docker services have been defined in docker-compose.yml

mongo: The main mongodb image which will used as source of data
mongo-express: This is a browser based GUI to explore data stored in mongo

server: A NodeJS based simple graphql server

client: A NodeJS based simple graphql client



