const comments = require("express").Router()
const {getAllComments, addSingleComment, editSingleComment, deleteSingleComment} = require("../queries/commentsQueries.js")

comments.get("/posts/:post_id", getAllComments)  // get a single comment
comments.post("/posts/:post_id/:author_id", addSingleComment)   //add a single comment
comments.patch("/:post_id/:author_id", editSingleComment)   //edit a single comment
comments.delete("/:post_id/:author_id", deleteSingleComment)   //delete a single comment

// PATCH /comments/:post_id/:commenter_id - Edit single comment.
// DELETE /comments/:post_id/:commenter_id - Delete single comment.

module.exports = comments