const likes = require("express").Router()
const {getAllLikes, addLike, deleteOneLike} = require("../../queries/likes")
// get likes (/likes/posts/post_id)

likes.get("/posts/:post_id",getAllLikes)

// post likes (/likes/posts/post_id)

likes.post("/posts/:post_id",addLike)
//delete likes (/likes/:post_id/:likerid)

likes.delete("/posts/:post_id",deleteOneLike)


module.exports = likes