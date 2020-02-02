const users = require("express").Router();
const userFollowingsRouter = require("./userFollowings/userFollowings");
const userLoginsRouter = require("./userLogins/userLogins");
const userPostsRouter = require("./userPosts/userPosts");
const {getUsers, getUser, createUser, deleteUser, getBetHistory, updateBetHistory} = require("./../../queries/users/users");

users.use("/:userId/followings", userFollowingsRouter);
users.use("/:userId/logins", userLoginsRouter);
users.use("/:userId/posts", userPostsRouter);

users.get("/", getUsers);
users.get("/:userId", getUser);
users.post("/", createUser);
users.delete("/:userId", deleteUser);
users.get("/:userId/betHistory", getBetHistory);
users.patch("/:userId/betHistory", updateBetHistory);

module.exports = users;