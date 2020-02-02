const users = require("express").Router();
const userFollowingsRouter = require("./userFollowings/userFollowings");
const userLoginsRouter = require("./userLogins/userLogins");
const userPostsRouter = require("./userPosts/userPosts");
const {} = require("./../../queries/users/users");

users.use("/:userId/followings", userFollowingsRouter);
users.use("/:userId/logins", userLoginsRouter);
users.use("/:userId/posts", userPostsRouter);

users.get("/");
users.get("/:userId");
users.get("/:userId/betHistory");
users.patch("/:userId/betHistory");
users.post("/");
users.delete("/:userId");

module.exports = users;