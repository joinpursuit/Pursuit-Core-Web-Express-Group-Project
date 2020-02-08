const users = require("express").Router();
const userFollowingsRouter = require("./userFollowings/userFollowings");
const userLoginsRouter = require("./userLogins/userLogins");
const userPostsRouter = require("./userPosts/userPosts");
const {getUsers, getUser, createUser, deleteUser, updateUser} = require("./../../queries/users/users");

users.use("/:userId/followings", userFollowingsRouter);
users.use("/logins", userLoginsRouter);
users.use("/:userId/posts", userPostsRouter);

users.get("/", getUsers);
users.get("/:userId", getUser);
users.post("/", createUser);
users.delete("/:userId", deleteUser);
users.patch("/:userId", updateUser)

module.exports = users;