const postLikes = require("express").Router({mergeParams: true});
const {getLikes, addLike} = require("./../../../queries/posts/postLikes/postLikes");

postLikes.get("/", getLikes);
postLikes.post("/", addLike);

module.exports = postLikes;