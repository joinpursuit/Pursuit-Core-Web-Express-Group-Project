const comments = require("express").Router()

const {getAllComments, addSingleComment, editSingleComment, deleteSingleComment, deleteAllComments} = require("../queries/commentsQueries")

comments.get("/posts/:post_id", getAllComments)  // get a single comment
comments.post("/posts/:post_id/:author_id", addSingleComment)   //add a single comment
comments.patch("/:post_id/:author_id", editSingleComment)   //edit a single comment
comments.delete("/:id/:post_id/:author_id/", deleteSingleComment)   //delete a single comment
comments.delete("/:post_id/:author_id", deleteAllComments)   //delete all comments

// PATCH /comments/:post_id/:commenter_id - Edit single comment.
// DELETE /comments/:post_id/:commenter_id - Delete single comment.


module.exports = comments