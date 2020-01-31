const likes = require("express").Router()
const {getLikesForSingle, addSingleLike, deleteSingleLike} = require("../queries/likesQueries.js")

likes.get("/post/:post_id", getLikesForSingle) // Get all likes for one post
likes.post("/post/:post_id", addSingleLike) // add single like
likes.delete("/:post_id/:liker_id", deleteSingleLike) //delete like

module.exports = likes