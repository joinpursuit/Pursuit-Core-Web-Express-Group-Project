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
//I need an eye on the this, it is not working
const getPost = async (req, res, next) => {
   try {
      let post = await db.one("SELECT username FROM Users JOIN users.id = posts.poster_id WHERE id = $1", req.params.id)
      let albums = await db.any("SELECT album_title, photo.url FROM albums JOIN albums.id = pictures.album_id WHERE creator_id = $1", req.params.id)
      post.albums = albums
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

const createPost = async (req, res, next) =>{
   try {
      let post = await db.none('INSERT INTO posts (poster_id, album_id, body) VALUES (${poster_id},${album_id}, ${body}) RETURNING *', req.body)
      res.status(200).json({
         status:'Success',
         message:'Add a new post',
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
   try{
      await db.none('DELETE * FROM posts WHERE id = $1', req.params.id)
      res.status(200).json({
          status:'Success',
          message:'Post is now deleted'
      })
  }catch(err){
      res.json({
         status: "Failed",
         message: err
      })
  }
}


module.exports = { getPosts, getPost, createPost, deletePost };