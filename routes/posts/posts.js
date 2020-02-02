const posts = require("express").Router()
const {getAllPost, getUserPosts, registerPosts, deletePost} = require("../../queries/posts.js")

posts.get("/", getAllPost, (req, res) => {
  res.status(200).json({
    status: "failure",
    message: "Server is unable to retrieve all posts" 
  })
})

posts.get("/:user_id", getUserPosts, (req, res) => {
  res.status(200).json({
    status: "failure",
    message: "Unable to get single post"
  })
})

posts.post("/", registerPosts, (req, res) => {
  res.status(200).json({
    status: "failure",
    message: "Unable to add single post"
  })
})

posts.patch("/:id", (req, res) => {
  res.status(200).json({
    status: "failure",
    message: "Unable to edit single post"
  })
})

posts.delete("/:id", deletePost, (req, res) => {
  res.status(200).json({
    status: "failure",
    message: "Unable to delete single post"
  })
})

module.exports = posts