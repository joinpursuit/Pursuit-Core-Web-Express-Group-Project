const postsComments = require("express").Router({mergeParams:true});

const { getCommentByPost } = require("../../../queries/comments")

postComments.get("/:id", getCommentByPost)

module.exports = postsComments;