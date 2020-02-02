const userPosts = require("express").Router({mergeParams: true});

let {getUserPost} = require("./../../../queries/users/userPosts/userPosts");

userPosts.get("/", getUserPost)

module.exports = userPosts;