const postLikes = require("express").Router({mergeParams: true});
const {getLikes, addLike, deleteLike} = require("./../../../queries/posts/postLikes/postLikes");

postLikes.get("/", getLikes);
postLikes.post("/", addLike);
postLikes.delete("/:likerId", deleteLike);

module.exports = postLikes;