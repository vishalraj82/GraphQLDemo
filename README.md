## README.md

This is a simple demonstration on how to use GraphQL to query and mutate data.

The following stack has been used

<ul>
    <li>NodeJS</li>
    <li>Express</li>
    <li>create-react-app</li>
    <li>mongo</li>
    <li>mongo-express</li>
    <li>docker</li>
</ul>

Docker has been used so this project can run on any machine which supports docker
Four docker services have been defined in docker-compose.yml

<ul>
    <li>mongo: The main mongodb image which will used as source of data</li>
    <li>mongo-express: This is a browser based GUI to explore data stored in mongo</li>
    <li>server: A NodeJS based simple graphql server</li>
    <li>client: A NodeJS based simple graphql client</li>
</ul>

To start using the application, you need to start three docker container

<ul>
    <li>docker-compose up mongo</li>
    <li>docker-compose up --build graphql-server</li>
    <li>docker-compose up --build graphql-client</li>
</ul>

Optionally you may also star the docker container to explore the mongodb

> docker-compose up mongo-express

Once all the docker container start without any error, visit http://localhost:3000/

NOTE: The application is in basic state, without any check for non-existance of entity, duplicity or otherwise.
