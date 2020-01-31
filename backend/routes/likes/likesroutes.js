const likes = require("express").Router();
const { getLikesPost, likePost, deleteLike } = require("/Users/jovanni/Desktop/Projects/groupExpressProject/Pursuit-Core-Web-Express-Group-Project/backend/queries/likes/likesquiery.js");

likes.get("/posts/:post_id", getLikesPost);
likes.post("/posts/:post_id", likePost);
likes.delete("/:post_id/:user_id", deleteLike);
module.exports = likes