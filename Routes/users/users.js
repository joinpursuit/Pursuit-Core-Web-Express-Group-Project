const users = require("express").Router();
const { getUsers, getSUser ,getUser, createUser, deleteUser } = require("../../queries/users");



users.get("/", getUsers);

users.get("/:id", getSUser);

users.post("/:username", getUser);

users.post("/", createUser);

users.delete("/:id", deleteUser);


module.exports = users;


