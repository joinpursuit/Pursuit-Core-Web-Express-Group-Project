const users = require("express").Router();
const {getUsers, getUser, createUser, updateUser, deleteUser} = require()

users.get("/", getUsers);

users.get("/:id", getUser);

users.post("/", createUser);

users.patch("/:id", updateUser)

users.delete("/", deleteUser)

module.exports = users;