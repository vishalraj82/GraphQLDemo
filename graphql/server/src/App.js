const express = require("express");
const graphqlHTTP = require("express-graphql");
const mongoose = require("mongoose");
const cors = require("cors");

const schema = require("./schema/index.js");
const app = express();


// Allow cross-origin request since client is on different host / port / protocol
app.use(cors());

/**
 * From the docker logs, it can be clearly seen that the specified user in the file docker-compose.yml
 * is created under database admin for authentication purpose. Hence, admin is given in connection url.
 */

mongoose.connect("mongodb://mdbroot:mdbpass@mongoDB:27017/admin", { useNewUrlParser: true })
mongoose.connection.once("open", () => {
    console.log("Connected to Mongodb...");
});

app.use("/graphql", (req, res) => graphqlHTTP({ schema, graphiql: Boolean(req.query.graphiql) })(req, res));

app.listen(4000, (req, res) => {
    console.log("Listening on port 4000...");
});
