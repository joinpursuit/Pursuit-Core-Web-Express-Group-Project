const db = require("../../db/index.js");

const getAllComments = async (req, res, next) => {
  try {
    res.status(200).json({
      status: "Success",
      message: "Grabbed all comments",
      body: {
        comments: await db.any(
          "SELECT comments.id, post_id, author_id, content, time_stamp, username FROM comments INNER JOIN users ON users.id = comments.author_id WHERE post_id = $1 ORDER BY time_stamp DESC",
          req.params.post_id
        )
      }
    });
  } catch (error) {
    next(error);
  }
};

const addSingleComment = async (req, res, next) => {
  try {
    let { post_id, author_id } = req.params;
    let { content } = req.body;
    let single_comment = await db.one(
      "INSERT INTO comments (post_id, author_id, content) VALUES ($1, $2, $3) RETURNING *",
      [post_id, author_id, content]
    );
    res.status(200).json({
      status: "Success",
      message: "Added a single comment",
      body: {
        single_comment
      }
    });
  } catch (error) {
    next(error);
  }
};

const editSingleComment = async (req, res, next) => {
  try {
    let { post_id, author_id } = req.params;
    let { content } = req.body;
    let edited_comment = await db.one(
      `UPDATE comments SET content = '${content}' WHERE (post_id = $1 AND author_id = $2)`,
      [post_id, author_id]
    );
    res.status(200).json({
      status: "Succes",
      message: "You have edited a single comment",
      body: {
        edited_comment
      }
    });
  } catch (error) {
    next(error);
  }
};

const deleteSingleComment = async (req, res, next) => {
  try {
    let { id, post_id } = req.params;
    let deleted_comment = await db.one(
      "DELETE FROM comments WHERE (id = $1 AND post_id = $2) RETURNING *",
      [id, post_id]
    );
    res.status(200).json({
      status: "Success",
      message: "You have deleted a single comment",
      body: {
        deleted_comment
      }
    });
  } catch (error) {
    next(error);
  }
};

const deleteAllComments = async (req, res, next) => {
  try {
    let { post_id, author_id } = req.params;
    let { content } = req.body;
    let deleted_comment = await db.one(
      "DELETE FROM comments WHERE (post_id = $1 AND author_id = $2) RETURNING *",
      [post_id, author_id]
    );
    res.status(200).json({
      status: "Success",
      message: "You have deleted a single comment",
      body: {
        deleted_comment
      }
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllComments,
  addSingleComment,
  editSingleComment,
  deleteSingleComment,
  deleteAllComments
};
