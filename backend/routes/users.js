const users = require("express").Router();
const {
  getAllUsers,
  getSingleUserById,
  insertSingleUser,
  deleteUsersById,
  searchUserByName
} = require("../queries/usersQueries.js");

users.get("/", getAllUsers); // Get all users
users.get("/:id", getSingleUserById); // Get single user
users.get("/username/:username", searchUserByName);
users.post("/", insertSingleUser); // Add single user
users.delete("/:id", deleteUsersById); // Delete users with the corresponding id

module.exports = users;
