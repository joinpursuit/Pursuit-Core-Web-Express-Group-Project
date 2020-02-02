const userPosts = require("express").Router({mergeParams: true});

let {getUserPost} = require("./../../users/userPosts/");

userPosts.get("/:userId/posts", getUserPost)

module.exports = userPosts;