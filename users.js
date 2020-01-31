const users = require("express").Router;



users.get("/", getUsers);

users.get("/:id", getUser);

users.post("/", createUser);

users.delete("/;id", deleteUser);



module.exports = users;


