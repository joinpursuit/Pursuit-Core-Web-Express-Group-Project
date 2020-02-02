const userFollowings = require("express").Router({mergeParams: true});
const {getUserFollowings, createUserFollowing} = require("./../../../queries/users/userFollowings/userFollowings");

userFollowings.get("/", getUserFollowings);
userFollowings.post("/", createUserFollowing);

module.exports = userFollowings;