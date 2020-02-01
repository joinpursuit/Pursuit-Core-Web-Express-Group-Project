const users = require("express").Router();
const {
  getAllUsers,
  getUserByid,
  addUser,
  deleteUser
} = require("../../queries/users/usersquieries.js");

users.get("/", getAllUsers);

users.get("/:id", getUserByid);

users.post("/", addUser);

users.delete("/:id", deleteUser);

module.exports = users;
