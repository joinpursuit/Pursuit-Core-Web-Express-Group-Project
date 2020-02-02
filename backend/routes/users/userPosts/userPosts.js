const userPosts = require("express").Router({mergeParams: true});

let {getUserPost} = require("./../../../queries/users/userPosts/userPosts");

userPosts.get("/:userId/posts", getUserPost)

module.exports = userPosts;