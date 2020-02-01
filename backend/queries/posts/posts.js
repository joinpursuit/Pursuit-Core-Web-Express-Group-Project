const dataBase = require("../../database/index.js");

const getposts = async (req, res, next) => {
  try {
    let posts = await dataBase.any("SELECT * FROM posts");
    res.status(200).json({
      posts,
      status: "success",
      message: "selected all posts"
    });
  } catch (error) {
    next(error);
  }
};

const getpost = async (req, res, next) => {
  try {
    let post = await dataBase.any("SELECT * FROM posts WHERE id=$1", [
      req.params.id
    ]);
    res.status(200).json({
      post,
      status: "success",
      message: "selected post"
    });
  } catch (error) {
    next(error);
  }
};

const newpost = async (req, res, next) => {
  try {
    let newpost = await dataBase.any(
      `INSERT INTO posts (type,body,album_id,user_id) VALUES ('${req.body.type}','${req.body.body}',${req.body.album_id},${req.body.user_id} RETURNING *)`
    );
    res.status(200).json({
      newpost,
      status: "success",
      message: "post created "
    });
  } catch (error) {
    next(error);
  }
};

const editPost = async (req, res, next) => {
  try {
    let editedPost = await dataBase.any(
      `UPDATE posts SET body = '${req.body.body}' WHERE id=${req.params.id} RETURNING *`
    );
    res.status(200).json({
      editedPost,
      status: "success",
      message: "post edited "
    });
  } catch (error) {
    next(error);
  }
};

const deletePost = async (req, res, next) => {
  try {
    let deletedPost = await dataBase.any(
      `DELETE FROM posts WHERE id = ${req.params.id} RETURNING *`
    );
    res.status(200).json({
      deletedPost,
      status: "success",
      message: "post deleted "
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getposts, getpost, newpost, editPost, deletePost };
