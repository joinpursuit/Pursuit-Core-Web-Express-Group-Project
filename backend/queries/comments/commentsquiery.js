const db = require("/Users/jovanni/Desktop/Projects/groupExpressProject/Pursuit-Core-Web-Express-Group-Project/backend/database/index.js");

const getCommentsPost = async (req, res, next) => {
  try {
    let comments = await db.any(
      `SELECT body FROM comments WHERE post_id = ${req.params.post_id}`
    );
    res.status(200).json({
      comments,
      status: "Success",
      message: "All comments for this post"
    });
  } catch (err) {
    next(err);
  }
};

const addComment = async (req, res, next) => {
  console.log(req.body.body);
  try {
    await db.none(
      `INSERT INTO comments (body, user_id, post_id) VALUES ('${req.body.body}', ${req.params.user_id}, ${req.params.post_id})`,
      req.body
    );
    res.status(200).json({
      status: "Success",
      message: "Comment was added"
    });
  } catch (error) {
    next(error);
  }
};

const updateComment = async (req, res, next) => {
  try {
    await db.none(
      `UPDATE comments SET body = '${req.body.body}' WHERE user_id = ${req.params.user_id} AND post_id = ${req.params.post_id}`
    );
    res.status(200).json({
      status: "Success",
      message: "Comment has been updated"
    });
  } catch (error) {
    next(error);
  }
};

const deleteComment = async (req, res, next) => {
  try {
    await db.none(
      `DELETE FROM comments WHERE user_id = ${req.params.user_id} AND post_id = ${req.params.post_id}`
    );
    res.status(200).json({
      status: "Success",
      message: "Comment was deleted from post"
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getCommentsPost, addComment, updateComment, deleteComment };
