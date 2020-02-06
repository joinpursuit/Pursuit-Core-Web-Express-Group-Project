const db = require("../DATABASE/index.js");

//see all albums from all users on home page
const getPosts = async (req, res, next) => {
   try {
      let posts = await db.any("SELECT u.username, a.title, p.body, ARRAY_AGG (pic.photo_url) FROM users u JOIN albums a ON a.creator_id = u.id JOIN pictures pic ON pic.album_id = a.id JOIN posts p ON p.album_id = a.id GROUP BY a.title, u.username, p.body");
      res.status(200).json({
         status: "Success",
         message: "Pull all posts",
         body: posts,
      })
   } catch (err) {
      res.status(404).json({
         status: "Failed",
         message: err
      })
   }
}
//get an album from a feed
const getPost = async (req, res, next) => {
   try {
      let post = await db.one("SELECT DISTINCT u.username, a.title, a.creator_id, p.body description, c.body note, c.commenter_id, COUNT (l.posts_id) total_likes, ARRAY_AGG (pic.photo_url) AS pics FROM users u JOIN posts p ON p.poster_id = u.id JOIN albums a ON a.creator_id = u.id JOIN pictures pic ON pic.album_id = a.id JOIN comments c ON c.posts_id = p.id JOIN likes l ON l.posts_id = p.id GROUP BY a.id, a.title, u.username, p.body, c.body, p.id, c.commenter_id HAVING p.id = $1 ORDER BY c.commenter_id ASC", req.params.id)
      res.status(200).json({
            status: "Success",
            message: "Retrieve an album",
            body: post
         })

   } catch (err) {
      res.status(404).json({
         status: "Failed",
         message: err
      })
   }
}

const createPost = async (req, res, next) => {
   try {
      let post = await db.any('INSERT INTO posts (poster_id, album_id, body) VALUES (${poster_id},${album_id}, ${body}) RETURNING *', req.body)
      res.status(200).json({
         status: 'Success',
         message: 'Add a new  post',
         body: post
      })
   } catch (err) {
      res.json({
         status: "Failed",
         message: err
      })
   }
}

const deletePost = async (req, res, next) => {
   try {
      await db.none('DELETE * FROM posts WHERE id = $1', req.params.id)
      res.status(200).json({
         status: 'Success',
         message: 'Post is now deleted'
      })
   } catch (err) {
      res.json({
         status: "Failed",
         message: err
      })
   }
}

//get all comments from an album
const getAllCommentsByPost = async (req, res, next) => {
   try {
      let comments = await db.one("SELECT u.username, c.body Remarks FROM users u JOIN comments c ON c.commenter_id = u.id JOIN posts p ON p.id = c.posts_id WHERE p.id = $1", req.params.id)
      res.status(200).json({
         status: "Success",
         message: "We receive all comments",
         body: comments
      })
   } catch (err) {
      res.json({
         status: "Failed",
         message: err
      })
   }
}

module.exports = { getPosts, getPost, createPost, deletePost, getAllCommentsByPost };