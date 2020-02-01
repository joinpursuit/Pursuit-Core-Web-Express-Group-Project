const db = require("../../db/index.js");

const getAllPosts = async (req, res, next) => {
  try {
    res.status(200).json({
      status: "Success",
      message: "Got all Posts",
      body: {
        posts: await db.any("SELECT * FROM posts")
      }
    });
  } catch (error) {
    next(error);
  }
};

const getSinglePost = async (req, res, next) => {
  try {
    let { id } = req.params;
    res.status(200).json({
      status: "Success",
      message: "Got single post by id: " + id,
      body: {
        single_post: await db.any("SELECT * FROM posts WHERE id = $1", [id])
      }
    });
  } catch (error) {
    next(error);
  }
};

const insertSinglePost = async (req, res, next) => {
  try {
    let { poster_id, imgURL, description } = req.body;
    let single_post = await db.one(
      "INSERT INTO posts (poster_id, imgURL, description) VALUES ($1, $2, $3)",
      [poster_id, imgURL, description]
    );
    res.status(200).json({
      status: "Success",
      message: "Created a single post",
      body: {
        single_post
      }
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllPosts, getSinglePost, insertSinglePost };
