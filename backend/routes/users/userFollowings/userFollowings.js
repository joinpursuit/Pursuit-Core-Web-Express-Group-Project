const userFollowings = require("express").Router({mergeParams: true});
const {getUserFollowings, createUserFollowing, getUserFollowingCount, getUserFollowerCount} = require("./../../../queries/users/userFollowings/userFollowings");

userFollowings.get("/", getUserFollowings);
userFollowings.post("/", createUserFollowing);
userFollowings.get("/followerCount", getUserFollowerCount);
userFollowings.get("/followingCount", getUserFollowingCount);

const { getUserFollowings, createUserFollowing } = require("./../../../queries/users/userFollowings/userFollowings");

userFollowings.get("/:userId/following", getUserFollowings)
userFollowings.post("/:userId/following", createUserFollowing)

module.exports = userFollowings;