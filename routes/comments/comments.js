const comments = require('express').Router();
const {getAllComments, getSingleComment, editSingleComment, deleteSingleComment} = require("/..queries/comments.js")

comments.get("/posts/:post_id", getAllComments);
comments.post("/posts/:post_id/:commenter_id", getSingleComment);
comments.patch("/:post_id/:commenter_id", editSingleComment);
comments.delete("/:post_id/:commenter_id", deleteSingleComment);



module.exports = comments;
