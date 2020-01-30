const posts = require("express").Router()
const {getAllPosts, getSinglePost} = require("../queries/postQueries")

posts.get("/posts", getAllPosts) // Get all posts
posts.get("/posts/:id", getSinglePost) // Get single post


module.exports = posts