const likes = require("express").Router();
const { getLikesPost, likePost, deleteLike } = require("../../queries/likes/likesquiery");

likes.get("/posts/:post_id", getLikesPost);
likes.post("/posts/:post_id", likePost);
likes.delete("/:post_id/:user_id", deleteLike);
module.exports = likes