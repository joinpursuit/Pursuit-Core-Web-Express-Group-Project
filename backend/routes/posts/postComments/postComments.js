const postComments = require("express").Router({mergeParams: true});
const {getComments, addComment, editComment, deleteComment} = require("./../../../queries/posts/postComments/postComments");

postComments.get("/", getComments);
postComments.post("/", addComment);
postComments.patch("/:commentId", editComment);
postComments.delete("/:commentId", deleteComment);

module.exports = postComments;