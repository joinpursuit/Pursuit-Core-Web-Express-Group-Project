const users = require("express").Router();
const userFollowingsRouter = require("./userFollowings/userFollowings");
const userLoginsRouter = require("./userLogins/userLogins");
const userPostsRouter = require("./userPosts/userPosts");
<<<<<<< HEAD
const {getUsers, getUser, createUser, deleteUser} = require("./../../queries/users/users")

=======
const {getUsers, getUser, createUser, deleteUser, updateUser} = require("./../../queries/users/users");
>>>>>>> c552837cf9e81b4907c56ce1774ac98995fb40d8

users.use("/:userId/followings", userFollowingsRouter);
users.use("/:userId/logins", userLoginsRouter);
users.use("/:userId/posts", userPostsRouter);

<<<<<<< HEAD


users.get("/", getUsers)
users.get("/:userId", getUser)
users.post("/", createUser)
users.delete("/:userId", deleteUser)


=======
users.get("/", getUsers);
users.get("/:userId", getUser);
users.post("/", createUser);
users.delete("/:userId", deleteUser);
users.patch("/:userId", updateUser)
>>>>>>> c552837cf9e81b4907c56ce1774ac98995fb40d8

module.exports = users;