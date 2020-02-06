const users = require("express").Router();
const { getUsers, getUser, createUser, deleteUser } = require("../../queries/users");



users.get("/", getUsers);

users.get("/:username", getUser);

users.post("/:username", getUser);

users.post("/", createUser);

users.delete("/:id", deleteUser);


module.exports = users;


