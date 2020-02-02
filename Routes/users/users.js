const users = require("express").Router();
const { getUsers, getUser, createUser, deleteUser } = require("");



users.get("/", getUsers);

users.get("/:id", getUser);

users.post("/", createUser);

users.delete("/;id", deleteUser);



module.exports = users;


