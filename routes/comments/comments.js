const comments = require('express').Router();
const{getAllComments, addComment,editSingleComment,deleteSingleComments} = require("../../queries/comments.js")

// const { getAllComments, getSingleComment, editSingleComment, deleteSingleComment } = require("/..queries/comments.js")

comments.get("/posts/:post_id", getAllComments)

comments.post("/posts/:post_id/:commenter_id", addComment)

comments.patch("/:post_id/:commenter_id",editSingleComment)

comments.delete("/:post_id/:commenter_id",deleteSingleComments)



module.exports = comments
