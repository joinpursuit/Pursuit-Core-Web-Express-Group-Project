const comments = require("express").Router();
const { getCommentsPost, addComment, updateComment, deleteComment } = require("../../queries/comments/commentsquiery");

comments.get("/posts/:post_id", getCommentsPost);
comments.post("/posts/:post_id/:user_id", addComment);
comments.patch("/:post_id/:user_id", updateComment);
comments.delete("/:post_id/:user_id", deleteComment);
module.exports = comments