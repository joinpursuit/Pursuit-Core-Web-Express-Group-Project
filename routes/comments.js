const comments = require('express').Router();
// const { getAllComments, getSingleComment, editSingleComment, deleteSingleComment } = require("/..queries/comments.js")

comments.get("/posts/:post_id", (req, res) =>{
    res.status(200).json({
        status:"success",
        message: "got all the posts",
        body: "test"
    })
});
comments.post("/posts/:post_id/:commenter_id",(req, res)=>{
    res.status(200).json({
        status:"success",
        message: "for the single post",
        body: "testing"
    })
});
comments.patch("/:post_id/:commenter_id", (req, res)=>{
    res.status(200).json({
        status:"success",
        message: "you are now able to edit the post",
        body: "testing"
    })
});
comments.delete("/:post_id/:commenter_id",(req, res)=>{
    res.status(200).json({
        status: "success",
        message: "comment has been deleted",
        body: "testing"
    })
})



module.exports = comments