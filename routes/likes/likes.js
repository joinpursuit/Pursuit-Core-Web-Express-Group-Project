const likes = require("express").Router()
const {getAllLikes, addLike, deleteOneLike} = require("../../queries/likes")
// get likes (/likes/posts/post_id)

likes.get("/posts/:post_id", (res,req)=>{
    res.status(200).json({
        status:"Failure",
        message:"Got all likes for single post",
        body:"test"
    })
})

// post likes (/likes/posts/post_id)

likes.post("/posts/:post_id",(req,res)=>{
    res.status(200).json({
        status:"failure",
        message:"Add like to post",
        body:"test"
    })
})
//delete likes (/likes/:post_id/:likerid)

likes.delete("/posts/:post_id",(req,res)=>{
    res.status(200).json({
        status:"failure",
        message:"like deleted",
        body:"test"
    })
})




module.exports = likes