const userFollowings = require("express").Router({mergeParams: true});

userFollowings.get("/");
userFollowings.post("/");

module.exports = userFollowings;