const users = require("express").Router();
const {
  getAllUsers,
  getUserByid,
  getUserByUsername,
  logInUser,
  addUser,
  deleteUser
} = require("../../queries/users/usersquieries.js");

users.get("/", getAllUsers);

users.post("/login", logInUser);

users.get("/:id", getUserByid);

users.get("/search/:user_name", getUserByUsername);

users.post("/", addUser);

users.delete("/:id", deleteUser);

module.exports = users;
