const likes = require("express").Router()
const {getLikesForSingle, addSingleLike, deleteSingleLike} = require("../queries/likesQueries.js")

likes.get("/post/:post_id", getLikesForSingle) 
likes.post("/post/:post_id/:liker_id", addSingleLike) 
likes.delete("/:post_id/:liker_id", deleteSingleLike) 
 
module.exports = likes;