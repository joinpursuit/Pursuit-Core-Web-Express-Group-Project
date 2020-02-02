const users = require("express").Router();
const {
  getAllUsers,
  getUserByid,
  logInUser,
  addUser,
  deleteUser
} = require("../../queries/users/usersquieries.js");

users.get("/", getAllUsers);

users.post("/login", logInUser);

users.get("/:id", getUserByid);

users.post("/", addUser);

users.delete("/:id", deleteUser);

module.exports = users;
