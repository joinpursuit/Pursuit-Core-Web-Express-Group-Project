const db = require("../DATABASE/index.js");

const getPosts = async (req, res, next) => {
   try {
      let posts = await db.any("SELECT username, image, caption FROM users JOIN posts on users.id = posts.poster_id");
      res.status(200).json({
         status: "Success",
         message: "Pull all posts",
         body: posts,
      })
   } catch (err) {
      console.log(err)
   }
}

module.exports = { getPosts };