const users = require("express").Router();

users.get("/", (req, res) => {
  res.json("get all users");
});

users.get("/:id", (req, res) => {
  res.json("get single user");
});

users.post("/", (req, res) => {
  res.json("add a single user");
});

users.delete("/:id", (req, res) => {
  res.json("deletes users with corresponding id");
});

module.exports = users;
