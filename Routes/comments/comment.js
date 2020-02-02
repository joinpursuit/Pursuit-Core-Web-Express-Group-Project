const comments = require('express').Router();
const { getAllComments, addSingleComment, editComment, deleteComment} = require('');

comments.get("/posts/:post_id", getAllComments);

comments.post("/posts/:post_id/:commenter_id", addSingleComment);

comments.patch("/posts/:post_id/:id", editComment);

comments.delete("/posts/:post_id/:id", deleteComment);

module.exports = comments;

