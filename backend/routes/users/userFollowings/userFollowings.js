const userFollowings = require("express").Router({mergeParams: true});
const {getUserFollowings, createUserFollowing, getUserFollowingCount, getUserFollowerCount} = require("./../../../queries/users/userFollowings/userFollowings");

userFollowings.get("/", getUserFollowings);
userFollowings.post("/", createUserFollowing);
userFollowings.get("/followerCount", getUserFollowerCount);
userFollowings.get("/followingCount", getUserFollowingCount);

module.exports = userFollowings;