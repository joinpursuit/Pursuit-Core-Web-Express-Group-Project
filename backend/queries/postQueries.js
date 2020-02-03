const db = require("../../db/index.js");

const getAllPosts = async (req, res, next) => {
  try {
    res.status(200).json({
      status: "Success",
      message: "Got all Posts",
      body: {
        posts: await db.any(
          "SELECT posts.id, poster_id, username, imgurl, description, time_stamp  FROM posts INNER JOIN users ON posts.poster_id = users.id ORDER BY time_stamp DESC"
        )
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
      "INSERT INTO posts (poster_id, imgURL, description) VALUES ($1, $2, $3) RETURNING *",
      [poster_id, imgURL, description]
    );
    res.status(200).json({
      status: "Success",
      message: "Created a single post",
      body: { single_post }
    });
  } catch (error) {
    next(error);
  }
};

const updateSinglePost = async (req, res, next) => {
  try {
    let { poster_id, imgURL, description } = req.body;
    let { id } = req.params;
    let single_post = await db.one(
      "UPDATE posts SET poster_id = $1, imgURL = $2, description = $3 WHERE id = $4 RETURNING *",
      [poster_id, imgURL, description, id]
    );
    res.status(200).json({
      status: "Success",
      message: "Updated a single post",
      body: { single_post }
    });
  } catch (error) {
    next(error);
  }
};

const deletePost = async (req, res, next) => {
  try {
    let { id } = req.params;
    let single_post = await db.one(
      "DELETE FROM posts WHERE id = $1 RETURNING *",
      id
    );
    res.status(200).json({
      status: "Success",
      message: "Deleted post with id: " + id,
      body: {
        single_post
      }
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllPosts,
  getSinglePost,
  insertSinglePost,
  updateSinglePost,
  deletePost
};
