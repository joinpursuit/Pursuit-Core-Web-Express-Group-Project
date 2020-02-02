const users = require("express").Router();
const userFollowingsRouter = require("./userFollowings/userFollowings");
const userLoginsRouter = require("./userLogins/userLogins");
const userPostsRouter = require("./userPosts/userPosts");
const {getUsers, getUser, createUser, deleteUser} = require("./../../queries/users/users");

users.use("/:userId/followings", userFollowingsRouter);
users.use("/:userId/logins", userLoginsRouter);
users.use("/:userId/posts", userPostsRouter);

users.get("/", getUsers);
users.get("/:userId", getUser);
users.get("/:userId/betHistory");
users.patch("/:userId/betHistory");
users.post("/", createUser);
users.delete("/:userId", deleteUser);

module.exports = users;