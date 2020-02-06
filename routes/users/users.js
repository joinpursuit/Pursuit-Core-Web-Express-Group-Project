const users = require("express").Router();
const { getUsers, getUser } = require("../../queries/users")

users.get("/:username", getUser);

users.get("/", getUsers);

// users.post("/", createUser);

// users.patch("/:id", updateUser)

// users.delete("/", deleteUser)

module.exports = users;