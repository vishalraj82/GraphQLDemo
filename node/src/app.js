const express = require("express");
const graphqlHTTP = require("express-graphql");
const mongoose = require("mongoose");

const schema = require("./schema/schema");
const app = express();

/**
 * From the docker logs, it can be clearly seen that the specified user in the file docker-compose.yml
 * is created under database admin for authentication purpose. Hence, admin is given in connection url.
 */

mongoose.connect("mongodb://mdbroot:mdbpass@mongo:27017/admin", { useNewUrlParser: true })
mongoose.connection.once("open", () => {
    console.log("Connected to Mongodb...");
});

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(8080, (req, res) => {
    console.log("Listening on port 8080...");
});
