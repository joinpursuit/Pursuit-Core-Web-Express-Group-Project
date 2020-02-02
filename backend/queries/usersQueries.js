const db = require("../../db/index.js");

const getAllUsers = async (req, res, next) => {
  try {
    res.status(200).json({
      status: "Success",
      message: "Got all Users",
      body: {
        users: await db.any("SELECT * FROM users")
      }
    });
  } catch (error) {
    next(error);
  }
};

const getSingleUserById = async (req, res, next) => {
  try {
    let { id } = req.params;
    res.status(200).json({
      status: "Success",
      message: "Got a single User",
      body: {
        single_user: await db.one("SELECT * FROM users where id = $1", [id])
      }
    });
  } catch (error) {
    next(error);
  }
};

const insertSingleUser = async (req, res, next) => {
  try {
    let { username, password, bio, propicURL } = req.body;
    let user = await db.one(
      "INSERT INTO users (username, password, bio, propicURL) VALUES ($1, $2, $3, $4) RETURNING *",
      [username, password, bio, propicURL]
    );
    res.status(200).json({
      status: "Success",
      message: "Created new user",
      body: {
        user
      }
    });
  } catch (error) {
    res.json({
      status: "Error",
      message: "Username already exists"
    });
    next(error);
  }
};

const deleteUsersById = async (req, res, next) => {
  try {
    let { id } = req.params;
    let user = await db.one("DELETE FROM users WHERE id = $1 RETURNING *", id);
    res.status(200).json({
      status: "Success",
      message: "Deleted user with id: " + id,
      body: {
        user
      }
    });
  } catch (error) {
    next(error);
  }
};

const searchUserByName = async (req, res, next) => {
  try {
    let { username } = req.params;
    let user = await db.one(
      "SELECT * FROM users WHERE username = $1",
      username
    );
    if (user) {
      res.status(200).json({
        status: "Success",
        message: "Searched for user by username: " + username,
        body: {
          user
        }
      });
    }
  } catch (error) {
    res.json({
      status: "Error",
      message: "No results found"
    });
    next(error);
  }
};

module.exports = {
  getAllUsers,
  getSingleUserById,
  insertSingleUser,
  deleteUsersById,
  searchUserByName
};
