const postComments = require("express").Router({mergeParams: true});
const {getComments, addComment, editComment, deleteComment} = require("./../../../queries/posts/postComments/postComments");

postComments.get("/", getComments);
postComments.post("/", addComment);
postComments.patch("/:commenterId", editComment);
postComments.delete("/:commentId", deleteComment);

module.exports = postComments;