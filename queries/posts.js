const db = require("../DATABASE/index.js");


const getPosts = async (req, res, next) => {
   try {
      let posts = await db.any("SELECT username, album_id, body FROM users JOIN posts on users.id = posts.poster_id");
      res.status(200).json({
         status: "Success",
         message: "Pull all posts",
         body: posts,
      })
   } catch (err) {
      res.json({
         status: "Failed",
         message: err
      })
   }
}
//I need an eye on the Get is not working
const getPost = async (req, res, next) => {
   try {
      let post = await db.one("SELECT users.username, albumPics.* FROM users JOIN (SELECT albums.creator_id,albums.album_title, ARRAY_AGG(pictures.photo_url) photo_array FROM albums JOIN pictures ON pictures.album_id = albums.id GROUP BY albums.album_title, albums.creator_id HAVING albums.creator_id = $1) AS albumPics ON albumPics.creator_id = users.id", req.params.id)
      res.status(200).json({
            status: "Success",
            message: "Got a single post",
            body: post
         })

   } catch (err) {
      res.json({
         status: "Failed",
         message: err
      })
   }
}

const createPost = async (req, res, next) => {
   try {
      let post = await db.none('INSERT INTO posts (poster_id, album_id, body) VALUES (${poster_id},${album_id}, ${body}) RETURNING *', req.body)
      res.status(200).json({
         status: 'Success',
         message: 'Add a new post',
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


module.exports = { getPosts, getPost, createPost, deletePost };