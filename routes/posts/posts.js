const posts = require("express").Router()
const {getAllPost, getUserPosts, registerPosts, deletePost, editPost} = require("../../queries/posts.js")

posts.get("/", getAllPost)

posts.get("/:user_id", getUserPosts)

posts.post("/", registerPosts)

posts.patch("/:id", editPost)

posts.delete("/:id", deletePost)

module.exports = posts