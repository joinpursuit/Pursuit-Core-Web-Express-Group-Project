const users = require("express").Router();
const userFollowingsRouter = require("./userFollowings/userFollowings");
const userLoginsRouter = require("./userLogins/userLogins");
const userPostsRouter = require("./userPosts/userPosts");

users.use("/:userId/followings", userFollowingsRouter);
users.use("/:userId/logins", userLoginsRouter);
users.use("/:userId/posts", userPostsRouter);

module.exports = users;