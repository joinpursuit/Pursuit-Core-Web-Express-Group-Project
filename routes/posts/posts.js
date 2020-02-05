const posts = require("express").Router()
const {getAllPosts, getSinglePost, registerPosts, deletePost, editPost} = require("../../queries/posts.js")

posts.get("/", getAllPosts)

posts.get("/:post_id", getSinglePost)

posts.post("/", registerPosts)

posts.patch("/:id", editPost)

posts.delete("/:post_id", deletePost)

module.exports = posts