db.auth("mdbroot", "mdbpass");

db = db.getSiblingDB("graphql_demo");

db.createUser({
    user: "demouser",
    pwd: "demopass",
    roles: [
        { root: "root", db: "admin" }
    ]
});
