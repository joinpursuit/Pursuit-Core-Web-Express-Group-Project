const userFollowings = require("express").Router({mergeParams: true});

const { getUserFollowings, createUserFollowing } = require("./../../../queries/users/userFollowings/userFollowings");

userFollowings.get("/:userId/following", getUserFollowings)
userFollowings.post("/:userId/following", createUserFollowing)

module.exports = userFollowings;