const comments = require("express").Router()
const {getAllCommentsByPost, addCommentByPost, editCommentByPost, deleteComment}=require("../queries/commentsQueries")

comments.get("/posts/:post_id", getAllCommentsByPost) // Get all comments
comments.post("/posts/:post_id/:author_id", addCommentByPost) // add single comment
comments.patch("/:post_id/:author_id", editCommentByPost) // edit single comment
comments.delete("/:post_id/:author_id", deleteComment) // Delete comment

comments.get("/posts/:post_id", getAllCommentsOnSinglePost)
comments.post("/post/:post_id/:commenter_id", addSingleComment)
comments.patch("/post_id/:commenter_id", editSingleComment)
comments.delete("/:post_id/:commenter_id", deleteSingleComment)




module.exports = comments