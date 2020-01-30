const posts = require("express").Router()

posts.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Got all posts",
    body: "test"
  })
})

posts.get("/:id", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Got single post",
    body: "test"
  })
})

posts.post("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Add single post",
    body: "test"
  })
})

posts.patch("/:id", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Edit single post",
    body: "test"
  })
})

posts.delete("/:id", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Delete single post",
    body: "test"
  })
})

module.exports = posts