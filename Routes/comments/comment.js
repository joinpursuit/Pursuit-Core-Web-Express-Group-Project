const comments = require('express').Router();
const { getAllComments, addSingleComment, editSingleComment, deleteComment} = require('../../queries/comments');


comments.get("/posts/:post_id", getAllComments);

comments.post("/posts/:post_id/:commenter_id", addSingleComment);

comments.patch("/posts/:post_id/:id", editSingleComment);

comments.delete("/posts/:post_id/:id", deleteComment);

module.exports = comments;

