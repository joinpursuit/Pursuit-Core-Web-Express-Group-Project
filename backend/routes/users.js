const users = require("express").Router();
const {
  getAllUsers,
  getSingleUserById,
  insertSingleUsers,
  deleteUsersById,
  searchUserByName
} = require("../queries/usersQueries.js");

users.get("/", getAllUsers); // Get all users
users.get("/:id", getSingleUserById); // Get single user
users.get("/username", searchUserByName);
users.post("/", insertSingleUsers); // Add single user
users.delete("/:id", deleteUsersById); // Delete users with the corresponding id

module.exports = users;
